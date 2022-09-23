
function myFunction() {
    console.log('Click')
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let check = 1;
    if (email != 'quang.le@netpower.no') {
        let msg = 'Wrong email, please fill again'
        document.getElementById("label1").innerHTML = msg;
        document.getElementById("label1").style.color = 'red';
        check = 0
    }
    if (password != '123') {
        let msg = 'Wrong password, please fill again'
        document.getElementById("label2").innerHTML = msg;
        document.getElementById("label2").style.color = 'red';
        check = 0

    }
    if (check == 1) {
        alert('Successful!')
    }


}