$(document).ready(function() {
    var currentIndex = 0;
    var slides = $(".slide");
    var dots = $(".dot");
    var isDragging = false;
    var startPosX = 0;
    var endPosX = 0;

    function showSlide(index) {
        var slideWidth = $(".slider").width();
        var offset = -index * slideWidth;
        $(".slider").css("transform", "translateX(" + offset + "px)");
        dots.removeClass("active");
        dots.eq(index).addClass("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Initialize the slider
    showSlide(currentIndex);

    // Handle next button click
    $(".next-button").click(function() {
        nextSlide();
    });

    // Handle previous button click
    $(".prev-button").click(function() {
        prevSlide();
    });


    // Mouse drag functionality (unchanged)
    $(".slider").on("mousedown", function(e) {
        isDragging = true;
        startPosX = e.pageX;
    });
});


function show_demo_popup() {
    var popup = document.getElementById("Demo-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function show_getintouch_popup() {
    var popup = document.getElementById("get-in-touch-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}


function hide_demo_popup() {
    var popup = document.getElementById("Demo-popup-form");
    popup.classList.remove("show");
}


function hide_getintouch_popup() {
    var popup = document.getElementById("get-in-touch-popup-form");
    popup.classList.remove("show");
}


function show_success_popup() {
    var popup = document.getElementById("success-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function hide_success_popup() {
    var popup = document.getElementById("success-popup-form");
    popup.classList.remove("show");
}

function show_failure_popup() {
    var popup = document.getElementById("failure-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function hide_failure_popup() {
    var popup = document.getElementById("failure-popup-form");
    popup.classList.remove("show");
}

function trackButtonClick() {
    gtag('event', 'click', {
        'event_category': 'Button',
        'event_label': 'EmbedFast - Send Message Clicked'
    });
}

function send_details(lead_source) {
    trackButtonClick()

    var requestformtype=''
    if (lead_source === 'Microsoft Demo Request via Website') {
        requestformtype= 'Demo-popup-form-'
    } else if (lead_source === 'get-in-touch-popup-form') {
        requestformtype='get-in-touch-popup-form-'
    }

    var firstName = document.getElementById(requestformtype+"firstname").value.trim();
    var lastName = document.getElementById(requestformtype+"lastname").value.trim();
    var email = document.getElementById(requestformtype+"email").value.trim();
    var phone = document.getElementById(requestformtype+"phone").value.trim();
    var company = document.getElementById(requestformtype+"company").value.trim();
    var role = document.getElementById(requestformtype+"role").value.trim();
    var message = document.getElementById(requestformtype+"message").value.trim();
    var DropDownSelection = document.getElementById("contactingForDropdown").value.trim();

    if(lead_source==='get-in-touch-popup-form')
    {
        if(DropDownSelection==='Technical Assessment'){
            lead_source='Microsoft Fabric Assessment via Website'
        }else if(DropDownSelection==='Consultation Services'){
            lead_source='Microsoft Fabric Consultation via Website'
        }else if(DropDownSelection==='Trainings'){
            lead_source='Microsoft Fabric Training via Website'
        }
    }

    userDetails = {
        firstname: firstName.value,
        lastname: lastName.value,
        emailaddress1: email.value,
        telephone1: phone.value,
        companyname: company.value,
        jobtitle: role.value,
        description: message.value,
        mslead_offersource: lead_source
    }
    const requestBody = JSON.stringify(userDetails);
    sendReq(requestBody,lead_source);
}

let sendReq = async (requestBody,lead_source) => {
    //URL to run Power Automate Flow 
    let PowerAutomateURL = 'https://prod-188.westus.logic.azure.com:443/workflows/d433b59d62094998a9db84f583bcb582/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1O0fI4aZo_c-dhJ6huflPA04YSh_Li1Seqp_rAwi_EI';
    //POST request to run Power Automate Flow
    let req = new Request(PowerAutomateURL, {
        method: 'POST',
        body: requestBody  // Data to insert in CRM 
    });
    //Response from Power Automate Flow
    const resp = await fetch(req);
    const val = resp.status;

    if (val == 204) {
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("company").value = "";
        document.getElementById("role").value = "";
        document.getElementById("message").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        hidePopup(lead_source);
        show_success_popup();
    } else {
        hidePopup(lead_source);
        show_failure_popup();
    }
}

function hidePopup(lead_source) {
    if (lead_source === 'Microsoft Demo Request via Website') {
        hide_demo_popup();
    } else {
        hide_getintouch_popup();
    }
}


function validateAndSend(lead_source) {
    var requestformtype=''
    if (lead_source === 'Microsoft Demo Request via Website') {
        requestformtype= 'Demo-popup-form-'
    } else if (lead_source === 'get-in-touch-popup-form') {
        requestformtype='get-in-touch-popup-form-'
    }

    var firstName = document.getElementById(requestformtype+"firstname").value.trim();
    var lastName = document.getElementById(requestformtype+"lastname").value.trim();
    var email = document.getElementById(requestformtype+"email").value.trim();
    var phone = document.getElementById(requestformtype+"phone").value.trim();
    var company = document.getElementById(requestformtype+"company").value.trim();
    var role = document.getElementById(requestformtype+"role").value.trim();
    var message = document.getElementById(requestformtype+"message").value.trim();

    clearErrorMessages();
    if (firstName === "") {
        showError("firstname", "Please enter your First Name.",requestformtype);
    }
    if (lastName === "") {
        showError("lastname", "Please enter your Last Name.",requestformtype);
    }
    if (company === "") {
        showError("company", "Please enter your Company Name.",requestformtype);
    }
    if (role === "") {
        showError("role", "Please enter your role.",requestformtype);
    }
    if (email === "") {
        showError("email", "Please enter your Email Address.",requestformtype);
    } else if (!isValidEmail(email)) {
        showError(requestformtype+"email", "Please enter a valid Email Address.",requestformtype);
    }
    if (phone === "") {
        showError("phone", "Please enter your Phone Number.",requestformtype);
    } else if (!isValidPhone(phone)) {
        showError("phone", "Please enter a valid Phone Number.",requestformtype);
    }
    // If all validations pass, you can proceed to send the message
    if (firstName !== "" && lastName !== "" && email !== "" && isValidEmail(email) && phone !== "" && isValidPhone(phone) && company !== "" && role !== "") {
        send_details(lead_source);
    }
}


function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function isValidPhone(phone) {
    var phonePattern = /^[0-9]{10}$/; //  10-digit phone number
    return phonePattern.test(phone);
}


function showError(inputId, errorMessage,requestformtype) {
    var errorElement = document.getElementById(requestformtype+inputId);
    errorElement.placeholder.color = 'red';
    errorElement.style.Color = 'red';
    errorElement.style.border = '2px solid red';
    errorElement.style.borderRadius = '10px';
}


function clearErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}