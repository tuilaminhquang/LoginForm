$(document).ready(function () {
    let viewPassword = false;
    let checkAccount = false;
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


    $('#btn-login').click(function (e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let check = 1;
        if (email != 'test@netpower.no') {
            let msg1 = 'Wrong email, please fill again';
            document.getElementById("label1").innerHTML = msg1;
            document.getElementById("label1").style.color = 'red';
            check = 0;

        }
        else if (password != '123456') {
            document.getElementById("label1").innerHTML = '';
            let msg2 = 'Wrong password, please fill again';
            document.getElementById("label2").innerHTML = msg2;
            document.getElementById("label2").style.color = 'red';
            check = 0;
        }

        if (check == 1) {
            alert('Successful!')
            window.location.href = 'profile.html';
        }

    });
    $('#clearUsername').click(function (e) {
        e.preventDefault();
        document.getElementById('email').value = '';
    });
    $('#viewPassword').click(function (e) {
        e.preventDefault();
        viewPassword = !viewPassword
        if (viewPassword)
            $('#password').attr('type', 'text');
        else
            $('#password').attr('type', 'password');
    });
    $('#forgot').click(function (e) {
        e.preventDefault();
        window.location.href = 'forgot.html';



    });
    $('.sign-up').click(function (e) {
        e.preventDefault();
        window.location.href = 'sign-up.html';

    });




});


