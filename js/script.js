const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validRexgexUsername = /^[a-zA-Z0-9_]{3,20}$/
const validRexgexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

const username = document.querySelector(".user-input")
const email = document.querySelector(".email-input")
const password = document.querySelector(".password-input")
const passwordCheck = document.querySelector(".passwordCheck-input")

function validate(input, regex, message = "Not allow") {
    input.nextElementSibling.innerHTML = message
    if(input.value != '') {
        if (input.value.match(regex)) {
            input.parentElement.classList.add("isValid")
            input.parentElement.classList.remove("notValid")
            input.nextElementSibling.style.display = "none"
        } else {
            input.parentElement.classList.remove("isValid")
            input.parentElement.classList.add("notValid")
            input.nextElementSibling.style.display = "unset"
        }
    }
}


username.addEventListener("input", () => {
    validate(username, validRexgexUsername, "Độ dài tên người dùng cần nằm trong khoảng từ 3 đến 20 ký tự, không có kí tự đặc biệt")
})
email.addEventListener("input", () => {
    validate(email, validRegexEmail, "Not a valid email")
})
password.addEventListener("input", () => {
    validate(password, validRexgexPassword, "Chấp nhận tất cả các chữ cái (chữ thường và chữ hoa) và chữ số, và yêu cầu mật khẩu có ít nhất 8 ký tự.")
})

passwordCheck.addEventListener("input", () => {
    validate(passwordCheck, password.value, "Passwords does not match")
})

