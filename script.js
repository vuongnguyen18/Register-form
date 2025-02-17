function validateForm() {
    let form = document.forms["patientForm"];
    let isValid = true;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    // Validate first name
    let fname = form["fname"];
    let fnameError = document.getElementById("fname-error");
    if (fname.value == "") {
        fname.classList.add("error-border");
        fnameError.textContent = "This field is required";
        fnameError.style.display = "block";
        isValid = false;
    } else if (format.test(fname.value)) {
        fname.classList.add("error-border");
        fnameError.textContent = "Special characters are not allowed";
        fnameError.style.display = "block";
        isValid = false;
    } else {
        fname.classList.remove("error-border");
        fnameError.style.display = "none";
    }

    // Validate last name
    let lname = form["lname"];
    let lnameError = document.getElementById("lname-error");
    if (lname.value == "") {
        lname.classList.add("error-border");
        lnameError.textContent = "This field is required";
        lnameError.style.display = "block";
        isValid = false;
    } else if (format.test(lname.value)) {
        lname.classList.add("error-border");
        lnameError.textContent = "Special characters are not allowed";
        lnameError.style.display = "block";
        isValid = false;
    } else {
        lname.classList.remove("error-border");
        lnameError.style.display = "none";
    }

    // Validate address
    let address = form["address"];
    let addressError = document.getElementById("address-error");
    if (address.value == "") {
        address.classList.add("error-border");
        addressError.style.display = "block";
        isValid = false;
    } else {
        address.classList.remove("error-border");
        addressError.style.display = "none";
    }

    // Validate zip code
    let zipCode = form["zip-code"];
    let zipCodeError = document.getElementById("zip-code-error");
    if (zipCode.value == "") {
        zipCode.classList.add("error-border");
        zipCodeError.style.display = "block";
        isValid = false;
    } else {
        zipCode.classList.remove("error-border");
        zipCodeError.style.display = "none";
    }

    // Validate city
    let city = form["City"];
    let cityError = document.getElementById("city-error");
    if (city.value == "") {
        city.classList.add("error-border");
        cityError.style.display = "block";
        isValid = false;
    } else {
        city.classList.remove("error-border");
        cityError.style.display = "none";
    }

    // Validate email
    let email = form["email"];
    let emailError = document.getElementById("email-error");
    if (email.value == "") {
        email.classList.add("error-border");
        emailError.style.display = "block";
        isValid = false;
    } else {
        email.classList.remove("error-border");
        emailError.style.display = "none";
    }

    // Validate phone number
    let phoneNumber = form["phone-number"];
    let phoneNumberError = document.getElementById("phone-number-error");
    if (phoneNumber.value == "") {
        phoneNumber.classList.add("error-border");
        phoneNumberError.style.display = "block";
        isValid = false;
    } else {
        phoneNumber.classList.remove("error-border");
        phoneNumberError.style.display = "none";
    }

    // Validate medicare number
    let medicareNumber = form["meidcare-number"];
    let medicareNumberError = document.getElementById("meidcare-number-error");
    if (medicareNumber.value == "") {
        medicareNumber.classList.add("error-border");
        medicareNumberError.style.display = "block";
        isValid = false;
    } else {
        medicareNumber.classList.remove("error-border");
        medicareNumberError.style.display = "none";
    }

    return isValid;
}

function clearError(inputId, errorId) {
    let input = document.getElementById(inputId);
    let error = document.getElementById(errorId);
    input.classList.remove("error-border");
    error.style.display = "none";
}