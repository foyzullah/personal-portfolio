const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const txtmsg = document.getElementById('txtmsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const txtmsgValue = txtmsg.value.trim();
    if (nameValue === '') {
        setErrorFor(name);
    } else {
        setSuccessFor(name);
        // labelSetFixed(name);
    }
    if (emailValue === '') {
        setErrorFor(email);
    } else if (!isEmail(emailValue)) {
        setErrorFor(email);
    } else {
        setSuccessFor(email)
    }
    if (txtmsgValue === '') {
        setErrorForTxt(txtmsg)
    } else {
        setSuccessForTxt(txtmsg);
    }
}

function setErrorFor(input) {
    const boxData = input.parentElement;
    boxData.className = 'box-data error';
}

function setSuccessFor(input) {
    const boxData = input.parentElement;
    boxData.className = 'box-data success';
}

function setErrorForTxt(textarea) {
    const textBox = textarea.parentElement;
    textBox.className = 'box-data error';

}

function setSuccessForTxt(textarea) {
    const textBox = textarea.parentElement;
    textBox.className = 'box-data success';

}

function labelSetFixed(input) {
    const labeFixed = input.parentElement;
    labeFixed.className = 'box-data labelfixed'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}