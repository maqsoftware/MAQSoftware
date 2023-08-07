
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("secondaryNav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function resourcesClick(id) {
    var video_desc = document.getElementById("video_desc");
    var documentation_desc = document.getElementById("documentation_desc");
    var video_div = document.getElementById("demo_video");
    var img_div = document.getElementById("documentation_img");
    if (id === "video_desc") {
        video_desc.classList.add("resources-div-click");
        documentation_desc.classList.remove("resources-div-click");
        img_div.style.display = 'none';
        video_div.style.display = 'block';
    } else {
        video_desc.classList.remove("resources-div-click");
        documentation_desc.classList.add("resources-div-click");
        img_div.style.display = 'block';
        video_div.style.display = 'none';
    }
}

function show_popup() {
    var popup = document.getElementById("popup-form");
    popup.style.visibility = 'visible';
    popup.classList.add("show");
}

function hide_popup() {
    var popup = document.getElementById("popup-form");
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

function send_details() {
    trackButtonClick()
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var company = document.getElementById("company");
    var role = document.getElementById("role");
    var message = document.getElementById("message");

    userDetails = {
        firstname: firstname.value,
        lastname: lastname.value,
        emailaddress1: email.value,
        telephone1: phone.value,
        companyname: company.value,
        jobtitle: role.value,
        description: message.value,
        mslead_offersource: 'Embed Fast Website'
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
        hide_popup();
        show_success_popup();
    } else {
        hide_popup();
        show_failure_popup();
    }
}

function keyfeaturesClick(featuresectionid, imageid) {
    var imageelement = document.getElementById(imageid);
    var imagesiblings = imageelement.parentNode.children;
    for (var i = 0; i < imagesiblings.length; i++) {
        imagesiblings[i].style.display = 'none';
    };
    imageelement.style.display = 'block';

    var featuresection = document.getElementById(featuresectionid);
    var featuresiblings = featuresection.parentNode.children;
    for (var i = 0; i < featuresiblings.length; i++) {
        featuresiblings[i].classList.remove("resources-div-click");
    };
    featuresection.classList.add("resources-div-click");
}

function trackButtonClick() {
    gtag('event', 'click', {
        'event_category': 'Button',
        'event_label': 'EmbedFast - Send Message Clicked'
    });
}

function validateAndSend() {
    var firstName = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var company = document.getElementById("company").value.trim();
    var role = document.getElementById("role").value.trim();
    var message = document.getElementById("message").value.trim();

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
        send_details();
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