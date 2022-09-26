$(document).ready(function () {
    var status = 1;
    const validateEmail = (mail) => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)

    }
    const checkEmail = () => {
        let email = document.getElementById('email').value;
        if (email != 'test@netpower.no') {
            alert('Wrong email!!');
            return false;


        }
        return true

    }

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
    let renderPage = () => {
        if (status == 1) {
            $('.email').show();


            $('#email').on('change', function () {
                let email = document.getElementById('email').value;
                console.log(email);
                console.log(validateEmail(email))
                if (validateEmail(email) == false) {
                    $('#email').css('border', '1px solid red');
                    $('#btn-forgot-main').disabled = true;
                    $('#btn-forgot-main').css('background', '#E6E6E6');
                }
                else {
                    $('#email').css('border', '1px solid black');
                    $('#btn-forgot-main').css('background', '#0163B3');

                }
            });
            $('.password').hide();
        }
        if (status == 2) {

            $('.password').show();
            $('.email').hide();
            $('#btn-forgot-main').text('Reset Password');

            let viewPassword, viewConfirmPassword = false;
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

        }


    }
    renderPage();
    $('#btn-forgot-main').click(function (e) {
        e.preventDefault();
        let email = document.getElementById('email').value;

        if (status == 1 & validateEmail(email) & checkEmail() || status == 2 & checkPassword()) {

            console.log("valid!!");
            console.log(status);
            status++;
            if (status == 3) {
                alert('Changed Password!!!');
                window.location.href = 'index.html';

            }


            console.log(status);
        }


        renderPage();


    });


})
$('.sign-up').click(function (e) {
    e.preventDefault();
    window.location.href = 'sign-up.html';

});
