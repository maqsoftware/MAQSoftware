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

//     $(document).on("mousemove", function(e) {
//         if (isDragging) {
//             endPosX = e.pageX;
//             var distance = endPosX - startPosX;

//             // Check if the user dragged enough to change the slide
//             if (Math.abs(distance) >= 50) {
//                 isDragging = false;
//                 if (distance > 0) {
//                     prevSlide();
//                 } else {
//                     nextSlide();
//                 }
//             }
//         }
//     });

//     $(document).on("mouseup", function() {
//         isDragging = false;
//     });
// });

function show_demo_popup() {
    
    var popup = document.getElementById("Demo-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function show_consultation_popup() {
    var popup = document.getElementById("Consultation-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function show_assesment_popup() {
    var popup = document.getElementById("Assesment-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function show_training_popup() {
    var popup = document.getElementById("Training-popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function hide_demo_popup() {
    var popup = document.getElementById("Demo-popup-form");
    popup.classList.remove("show");
}

function hide_consultation_popup() {
    var popup = document.getElementById("Consultation-popup-form");
    popup.classList.remove("show");
}


function hide_Demo_popup() {
    var popup = document.getElementById("Demo-popup-form");
    popup.classList.remove("show");
}


function hide_assessment_popup() {
    var popup = document.getElementById("Assesment-popup-form");
    popup.classList.remove("show");
}

function hide_training_popup() {
    var popup = document.getElementById("Training-popup-form");
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
    } else if (lead_source === 'Microsoft Fabric Consultation via Website') {
        requestformtype='Consultation-popup-form-'
    } else if (lead_source === 'Microsoft Fabric Assessment via Website') {
        requestformtype='Assesment-popup-form-'
    } else if (lead_source === 'Microsoft Fabric Training via Website') {
        requestformtype='Training-popup-form-'
    }

    
    var firstName = document.getElementById(requestformtype+"firstname").value.trim();
    var lastName = document.getElementById(requestformtype+"lastname").value.trim();
    var email = document.getElementById(requestformtype+"email").value.trim();
    var phone = document.getElementById(requestformtype+"phone").value.trim();
    var company = document.getElementById(requestformtype+"company").value.trim();
    var role = document.getElementById(requestformtype+"role").value.trim();
    var message = document.getElementById(requestformtype+"message").value.trim();


 

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
   
    sendReq(requestBody);
}

let sendReq = async (requestBody) => {
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
        hidePopup(requestBody);
        show_success_popup();
    } else {
        hidePopup(requestBody);
        show_failure_popup();
    }
}

function hidePopup(requestBody) {
    if (requestBody === 'Microsoft Demo Request via Website') {
        hide_Demo_popup();
    } else if (requestBody === 'Microsoft Fabric Consultation via Website') {
        hide_consultation_popup();
    } else if (requestBody === 'Microsoft Fabric Assessment via Website') {
        hide_assessment_popup();
    } else if (requestBody === 'Microsoft Fabric Training via Website') {
        hide_training_popup();
    }
}


function validateAndSend(lead_source) {
    var requestformtype=''
    if (lead_source === 'Microsoft Demo Request via Website') {
        requestformtype= 'Demo-popup-form-'
    } else if (lead_source === 'Microsoft Fabric Consultation via Website') {
        requestformtype='Consultation-popup-form-'
    } else if (lead_source === 'Microsoft Fabric Assessment via Website') {
        requestformtype='Assesment-popup-form-'
    } else if (lead_source === 'Microsoft Fabric Training via Website') {
        requestformtype='Training-popup-form-'
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
        showError("firstname", "Please enter your First Name.");
    }

    if (lastName === "") {
        showError("lastname", "Please enter your Last Name.");
    }

    if (company === "") {
        showError("company", "Please enter your Company Name.");
    }

    if (role === "") {
        showError("role", "Please enter your role.");
    }

    if (email === "") {
        showError("email", "Please enter your Email Address.");
    } else if (!isValidEmail(email)) {
        showError("email", "Please enter a valid Email Address.");
    }

    if (phone === "") {
        showError("phone", "Please enter your Phone Number.");
    } else if (!isValidPhone(phone)) {
        showError("phone", "Please enter a valid Phone Number.");
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

function showError(inputId, errorMessage) {
    var errorElement = document.getElementById(inputId);
    errorElement.placeholder.color = 'red';
    errorElement.style.Color = 'red';
    errorElement.style.border = '1px solid red';
    errorElement.style.borderRadius = '10px';

    var errorElement = document.getElementById(inputId + "-error");
    errorElement.textContent = errorMessage;
}


function clearErrorMessages() {
    var errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
        element.textContent = "";
    });
}