{
    // back to home


   

    localStorage=null;

    /* Sign Up Instance Variables*/
    var nameSignInput = $("#name-in");
    var emailSignInput = $("#email-signup-in");
    var passwordSignInput = $("#pass-signup-in");
    var phoneSignInput = $("#phone-in");
    var signUpBtn = $("#sign-up");


    /* Log In Instance Variables*/
    var emailInput = $("#email-in");
    var passwordInput = $("#pass-in");
    var loginBtn = $("#login-btn");
    var goToSignUpPageBtn = $("#sign-up");
    var logoutBtn = $("#logout");


    /* Users Data */
    var users = [{
        name: "Mohamad",
        email: "mohamadaktham7@gmail.com",
        password: "123456",
        phone: '0777753111'
    }, {
        name: "Rawabi",
        email: "rawabi@gmail.com",
        password: "123456",
        phone: '0774512365'
    }, {
        name: "Jozaa",
        email: "jozaaa@gmail.com",
        password: "123456",
        phone: '0771234532'
    }, {
        name: "Mohamad",
        email: "mohamadaktham7@gmail.com",
        password: "123456",
        phone: '0777519943'
    }]

    var newUser = {};
    var counter = 0;

    /********************************************************************************************* */

    //Start Doing Some Logic :) 
    $(document).ready(function () {

        /* Sign Up Part*/

        // Start Animate Input Fields When Focus 
        nameSignInput.focus(function () {
            nameSignInput.animate({
                width: '100%'
            })
        })

        nameSignInput.focusout(function () {
            nameSignInput.animate({
                width: '80%'
            })
        })

        emailSignInput.focus(function () {
            emailSignInput.animate({
                width: '100%'
            })
        })

        emailSignInput.focusout(function () {
            emailSignInput.animate({
                width: '80%'
            })
        })

        passwordSignInput.focus(function () {
            passwordSignInput.animate({
                width: '100%'
            })
        })

        passwordSignInput.focusout(function () {
            passwordSignInput.animate({
                width: '80%'
            })
        })

        phoneSignInput.focus(function () {
            phoneSignInput.animate({
                width: '100%'
            })
        })

        phoneSignInput.focusout(function () {
            phoneSignInput.animate({
                width: '80%'
            })
        })
        // End Animate Input Fields When Focus 


        //Regular Expressions For Validating Purposes
        function EmailValidation(emailValue) {
            var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex.test(emailValue);
        }

        function passwordValidation(passwordvalue) {
            var regex = /^[a-zA-Z0-9]{5,15}$/;
            return regex.test(passwordvalue);
        }

        function PhoneValidation(phoneValue) {
            var regex = /^[0-9]{10}$/;
            return regex.test(phoneValue);
        }
        //End Regular Expressions For Validating Purposes


        //Functions To Check Validation Status.
        function validateName() {
            var nameSignInputVal = nameSignInput.val().trim();
            if (nameSignInputVal === '') {
                $('.wrong-sign-name').attr('hidden', false);
                nameSignInput.css('border', '2px red solid')
                $('.name-field').addClass('error')
                return false
            } else {
                return true;
            }
        }

        function validateEmail() {

            var emailSignInputVal = emailSignInput.val().trim();
            if (EmailValidation(emailSignInputVal) === false) {
                $('.wrong-sign-email').attr('hidden', false);
                emailSignInput.css('border', '2px red solid')
                $('.email-field').addClass('error')
                return false
            } else {
                return true;
            }

        }

        function validatePassword() {

            var passwordSignInputVal = passwordSignInput.val().trim();
            if (passwordValidation(passwordSignInputVal) === false) {
                $('.wrong-sign-password').attr('hidden', false);
                passwordSignInput.css('border', '2px red solid')
                $('.password-field').addClass('error')
                return false
            } else {
                return true;
            }

        }

        function validatePhone() {

            var phoneSignInputVal = phoneSignInput.val().trim();
            if (PhoneValidation(phoneSignInputVal) === false) {
                $('.wrong-sign-Phone').attr('hidden', false);
                phoneSignInput.css('border', '2px red solid')
                $('.phone-field').addClass('error')
                return false
            } else {
                return true;
            }
        }
        //End Functions To Check Validation Status.


        //Sign Up Click Event.
        signUpBtn.click(function (e) {
            e.preventDefault();
            if (validateName()) {
                newUser['name'] = nameSignInput.val().trim();
                counter++;
            }
            if (validateEmail()) {
                newUser['email'] = emailSignInput.val().trim();
                counter++;
            }
            if (validatePassword()) {
                newUser['password'] = passwordSignInput.val().trim();
                counter++;
            }
            if (validatePhone()) {
                newUser['phone'] = phoneSignInput.val().trim() + '';
                counter++;
            }
            if (counter === 4) {
                localStorage.setItem('newUser', JSON.stringify(newUser));
                console.log(localStorage)
                // users.push(newUser)
                counter = 0
            }
        })
        // logoutBtn.click(function () {
        //     window.location.href = 'home.html';
        // });

        //Remove Errors Alerts when User Reenter New Valuse.
        nameSignInput.keyup(function () {
            nameSignInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.wrong-sign-name').attr('hidden', true);
        })

        emailSignInput.keyup(function () {
            emailSignInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.wrong-sign-email').attr('hidden', true);
        })

        passwordSignInput.keyup(function () {
            passwordSignInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.wrong-sign-password').attr('hidden', true);
        })

        phoneSignInput.keyup(function () {
            phoneSignInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.wrong-sign-Phone').attr('hidden', true);
        })

        /************************************************************************************************************** */

        /* Log In Part*/
        // Start Animate Input Fields When Focus 
        emailInput.focus(function () {
            emailInput.animate({
                width: '100%'
            })

        })

        emailInput.focusout(function () {
            emailInput.animate({
                width: '80%'
            })
        })

        passwordInput.focus(function () {
            passwordInput.animate({
                width: '100%'
            })
        })

        passwordInput.focusout(function () {
            passwordInput.animate({
                width: '80%'
            })
        })
        // End Animate Input Fields When Focus 


        //Login Button Click Event.
        loginBtn.click(function (e) {
            e.preventDefault();
            console.log(users)
            var retrievedData = localStorage.getItem('newUser');
            var result = JSON.parse(retrievedData);
            users.forEach(element => {

                // if (emailInput.val() === element.email && passwordInput.val() === element.password) {
                //     window.location.href = 'profile.html';
                // }
                if (emailInput.val() === result.email && passwordInput.val() === result.password) {
                    // window.location.href = 'profile.html';
                }

                // if (emailInput.val() !== element.email) {
                //     emailInput.css('border', '2px red solid')
                //     $('.email-field').addClass('error')
                //     $('.wrong-email').attr('hidden', false);
                // }

                // if (passwordInput.val() !== element.password) {
                //     passwordInput.css('border', '2px red solid')
                //     $('.password-field').addClass('error')
                //     $('.wrong-password').attr('hidden', false);
                // }
            })

            if (emailInput.val() === '') {
                emailInput.css('border', '2px red solid')
                $('.email-field').addClass('error')
                $('.wrong-email').attr('hidden', false);
            }

            if (passwordInput.val() === '') {
                passwordInput.css('border', '2px red solid')
                $('.password-field').addClass('error')
                $('.wrong-password').attr('hidden', false);
            }
        })


        //Remove Errors Alerts when User Reenter New Valuse. 
        emailInput.keyup(function () {
            emailInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.email-field').removeClass('error');
            $('.wrong-email').attr('hidden', true);
        })

        passwordInput.keyup(function () {
            passwordInput.css('border', '2px solid rgba(37, 46, 170, 0.787)');
            $('.password-field').removeClass('error');
            $('.wrong-password').attr('hidden', true);
        })

    })

    
}





