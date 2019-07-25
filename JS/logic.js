{
    /* Sign Up Instance Variables*/
    var nameSignInput = $("#name-in");
    var nameSignLable = $("#name-sign-label");
    var emailSignInput = $("#email-in");
    var emailSignLabel = $("#email-sign-label");
    var passwordSignInput = $("#pass-in");
    var passwordSignLabel = $("#pass-sign-label");
    var phoneSignInput = $("#pass-label");
    var phoneSignLable = $("#phone-sign-label");
    var signUp = $("#sign-up");


    /* Log In Instance Variables*/
    var emailInput = $("#email-in");
    var emailLabel = $("#email-label");
    var passwordInput = $("#pass-in");
    var passwordLabel = $("#pass-label");
    var loginBtn = $("#login");
    var signUpBtn = $("#sign-up");


    /* Users Data */
    var users = [{name:"rashed" , password:"123" }]


    $(document).ready(function () {

        /* Sign Up Part*/

        nameSignInput.focus(function () {
            nameSignInput.animate({
                width: '100%'
            })
            emailLabel.animate({
                left: 0
            })
        })

        nameSignInput.focusout(function () {
            nameSignInput.animate({
                width: '80%'
            })
        })







        
        /* Log In Part*/
        //Animate Email Input Width
        emailInput.focus(function () {
            emailInput.animate({
                width: '100%'
            })
            emailLabel.animate({
                left: 0
            })
        })

        emailInput.focusout(function () {
            emailInput.animate({
                width: '80%'
            })
        })

        //Animate Password Input Width
        passwordInput.focus(function () {
            passwordInput.animate({
                width: '100%'
            })
            emailLabel.animate({
                left: 0
            })
        })

        passwordInput.focusout(function () {
            passwordInput.animate({
                width: '80%'
            })
        })
    })
}