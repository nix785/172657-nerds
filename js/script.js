// JavaScript Document    
var btn = document.querySelector(".write_btn");

var popup = document.querySelector(".modal_content");
var close = popup.querySelector(".modal_content_close");
var form = popup.querySelector("form");



var names = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email");
var message = popup.querySelector("[name=message]");

var storEmail = localStorage.getItem("email");
var storName = localStorage.getItem("names");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal_content_show");

    if (storName) {
        names.value = storName;
        email.focus();
        if (storEmail) {
            email.value = storEmail;
            message.focus();
        } else {
            email.focus();
        }
    } else {
        names.focus();
    }
});



close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal_content_show");
});

form.addEventListener("submit", function (event) {
    if (!names.value) {
        event.preventDefault();
        names.style.borderColor = "#e74246";
        names.style.color = "#ed7477";
    } else {
        localStorage.setItem("names", names.value);
    };
    if (!email.value) {
        event.preventDefault();
        email.style.borderColor = "#e74246";
        email.style.color = "#ed7477";
    } else {
        localStorage.setItem("email", email.value);
    }
    event.preventDefault();
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal_content_show")) {
            popup.classList.remove("modal_content_show");
            popup.classList.remove("modal_error");
        }
    }
});