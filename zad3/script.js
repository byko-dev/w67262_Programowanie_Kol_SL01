isSuccessful = true;

function submitForm(event){
    event.preventDefault();

    if(!checkLength(event.target['login'].value, 3))
        setCustomValidity("Name is too short!", 'login', false)

    if(!isEmailAddress(event.target['email'].value))
        setCustomValidity('Email address is not valid!', 'email', false)

    if(!checkLength(event.target['password'].value, 6))
        setCustomValidity('Password is too short!', 'password', false)

    if(!checkPasswords(event.target['password'].value, event.target['password2'].value))
        setCustomValidity('Password are not the same!', 'password2', false)

    if(isSuccessful) save()
}

function checkLength(value, length){
    if(value.length < length) return false
    return true
}

function setCustomValidity(message, name_element, value) {
    spanError(name_element, message)
    isSuccessful = value;
}

function spanError(nameOfElement, message){
    let element = document.querySelector("[name=" + nameOfElement +"] + span.error");
    element.innerHTML = message;
}

function isEmailAddress(text){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) return true;
    return false;
}

function checkPasswordStrength(password){
    if(password.length > 12)
        return "Silne hasło! Możesz wypełniać dalej!";
    else if(password.length > 8)
        return "Hasło o średniej mocy! Możesz wypełniać dalej!";
    else
        return "Słabe hasło!";
}

function checkPasswords(password1, password2){
    if(password1 === password2) return true
    return false
}

document.getElementById('password').addEventListener('change', () => {
    setCustomValidity(checkPasswordStrength(document.getElementById('password').value), 'password', true);
});

/* part with checkbox */

let checkbox = document.getElementById('checkbox');

let element1 = document.getElementById('element1');
let element2 = document.getElementById('element2');

checkbox.addEventListener('change', () => {
    let element1 = document.getElementById('element1');
    let element2 = document.getElementById('element2');
    if(checkbox.checked){
        element1.style.display = "flex";
        element2.style.display = "flex";
    }else{
        element1.style.display = "none";
        element2.style.display = "none";
    }

})

element1.addEventListener('change', () => {
    let userBirthDay = element1.getElementsByTagName('input')[0].value;
    if(!isNotEmpty(userBirthDay))
        setCustomValidity("Birthday shouldn't be empty", "birthday", false)
    else if(checkUserAge(userBirthDay))
        setCustomValidity("Jesteś pełnoletni!", "birthday", true)
    else
        setCustomValidity("Nie jesteś pełnoletni!", "birthday", false)
})


function checkUserAge(age){
    const date = new Date(age);
    return (new Date().getYear() - date.getYear()) >= 18;
}

function isNotEmpty(text){
    if(text.length > 0) return true;
    return false;
}


/*part with table*/
function save(){
    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;
    let table = document.getElementById("table");

    let newRow = table.insertRow();
    //create cells
    let loginCell = newRow.insertCell();
    let emailCell = newRow.insertCell();
    loginCell.textContent = login;
    emailCell.textContent = email;
}
