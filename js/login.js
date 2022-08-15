// step no-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step no-2: get the email address inside the email input fild
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    // step no-3: get the password insede the password input fild
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    // Verify email and password
    if(email == 'bap@bank.com' && password == 'secret'){
        window.location.href= 'bank.html'
    }else{
        alert(`Email Password vule gasos?😡eine Email: bap@bank.com R password: secret`);
    }
})