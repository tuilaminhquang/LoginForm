const validateEmail = (mail) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)

}


$('#email').on('change', function () {
    let email = document.getElementById('email').value;
    if (validateEmail(email) == false) {
        $('#email').css('border', '1px solid red');
    }
});
const checkPassword = () => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password == '') {
        alert('Please fill password!!!');
        return false

    }

    if (password != confirmPassword) {
        alert('Password does not match, please fill again!!!');
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
        return false

    }
    return true
}

$('#clearUsername').click(function (e) {
    e.preventDefault();
    document.getElementById('email').value = '';
});

$('#clearFname').click(function (e) {
    e.preventDefault();
    document.getElementById('fullName').value = '';
});
var viewPassword, viewConfirmPassword = false;

$('#viewPassword').click(function (e) {
    e.preventDefault();
    viewPassword = !viewPassword
    if (viewPassword)
        $('#password').attr('type', 'text');
    else
        $('#password').attr('type', 'password');
});

$('#viewConfirmPassword').click(function (e) {
    e.preventDefault();
    viewConfirmPassword = !viewConfirmPassword;
    if (viewConfirmPassword)
        $('#confirmPassword').attr('type', 'text');
    else
        $('#confirmPassword').attr('type', 'password');
});
const loading = () => {
    $('.input').hide();
    $('.remember').hide();
    $('#btn-sign').hide();
    $('.recovery').hide();

    $('#loader').addClass('loader');


}
const render = () => {
    window.location.href = 'index.html'

}
$('#btn-sign').click(function (e) {
    e.preventDefault();

    let email = document.getElementById('email').value
    let checker = document.getElementById('agree');
    if (checker.checked) {
        loading();
        if (validateEmail(email) && checkPassword()) {
            setInterval(render, 3000);

        }


    }
    else {
        alert('Please check agree!!');
    }



});

