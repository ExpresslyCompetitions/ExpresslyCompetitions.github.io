var xlyr = xlyr || {
        milliseconds: new Date().getTime(),

        initialise: function (uuid, registerFunction) {
            console.log("working " + uuid);

            var content = document.getElementById("xly");
            if (content) {
                document.body.insertBefore(content, document.body.firstChild);
            }

            this.uuid = uuid;
            this.registerFunction = registerFunction;
            this.form = jQuery("#xly-submit-form");
            this.error = jQuery('#xly-globalError');
            this.firstNameField = jQuery('#xly-firstName').find('input');
            this.lastNameField = jQuery('#xly-lastName').find('input');
            this.emailField = jQuery('#xly-email').find('input');
            this.phoneField = jQuery('#xly-phone').find('input');
            this.addressField = jQuery('#xly-address').find('input');
            this.townField = jQuery('#xly-town').find('input');
            this.dobField = jQuery('#xly-dob');
            this.genderField = jQuery('#xly-gender');
            this.postcodeField = jQuery('#xly-postcode').find('input');
            this.submitButton = jQuery('#xly-submitButton');
            this.subField = jQuery('#xly-subscribe-container').find('label');
            this.newsletterCheck = document.getElementById('xly-newsletter');

            //this.autofill();
            this.form.submit(this.register)
        },

        xlyPopulateMeta: function() {
          console.log('populating meta tages');
          $('meta[property="xly:cemail"]').attr('content', this.emailField.val());
          $('meta[property="xly:cname"]').attr('content', this.firstNameField.val() + ' ' + this.lastNameField.val());
          $('meta[property="xly:cforename"]').attr('content', this.firstNameField.val());
          $('meta[property="xly:csurname"]').attr('content', this.lastNameField.val());
          $('meta[property="xly:caddress1"]').attr('content', this.addressField.val());
          $('meta[property="xly:ccity"]').attr('content', this.townField.val());
          $('meta[property="xly:czip"]').attr('content', this.postcodeField.val());
          $('meta[property="xly:cphone"]').attr('content', this.phoneField.val());
          $('meta[property="xly:cgender"]').attr('content', this.genderField.val());
          $('meta[property="xly:cdob"]').attr('content', this.dobField.val());
        },

        register: function (event) {
            event.preventDefault();
            xlyr.xlyValidateAndChecked();
        },


        xlyValidateAndChecked: function () {
            if (xlyr.xlyFormValidate() && xlyr.xlyCheckTerms() && xlyr.xlyValidateAge()) {
                xlyr.expresslyContinue();
                xlyr.xlyThankYou();
                xlyr.xlyPopulateMeta();
            }
        },

        xlyFormValidate: function () {
            var isValid = true;
            jQuery(".required").each(function () {
                var field = jQuery(this);
                if (field.val() === '') {
                    isValid = false;
                    field.attr('style', 'border: 1px solid red!important');
                } else {
                    field.css({'border': 'none'});
                }
            });

            if (isValid) {
                this.error.css({'display': 'none'});
                isValid = this.xlyValidateEmailField();
                if (isValid) {
                    isValid = this.xlyValidatePostCode();
                }
                if (isValid) {
                    isValid = this.xlyValidateAge();
                }
            } else {
                this.error.text('Please fill all fields');
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
            }

            return isValid;
        },

        xlyValidatePostCode: function () {
            var rePostcode = /^((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})$/i;
            if (!rePostcode.test(this.postcodeField.val())) {
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
                this.error.text('Please enter a valid postcode');
                this.postcodeField.attr('style', 'border: 1px solid red !important');
                return false;
            }
            return true;
        },

        xlyValidateEmailField: function () {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(this.emailField.val())) {
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
                this.error.text('Not a valid email address');
                this.emailField.attr('style', 'border: 1px solid red !important');
                return false;
            }
            return true;
        },

        xlyValidateAge: function () {
            var dob = this.dobField.val();
            var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
            if (!re.test(dob)) {
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
                this.error.text('Please insert date as dd/mm/yyyy');
                this.dobField.attr('style', 'border: 1px solid red !important');
                return false;
            }

            var p = dob.split("/");
            var dobDate = new Date(xlyr.xlyFormattedDate(dob));
            if (isNaN(dobDate) || dobDate.getFullYear() < 1900) {
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
                this.error.text('Please insert date as dd/mm/yyyy');
                this.dobField.attr('style', 'border: 1px solid red !important');
                return false;
            }

            var age = xlyr.xlyGetAge(dobDate);
            if (age < 18) {
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
                this.error.text('You must be over 18 to enter');
                this.dobField.attr('style', 'border: 1px solid red !important');
                return false;
            }
            return true;
        },

        xlyGetAge: function (birthDate) {
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },

        xlyFormattedDate: function (dob) {
            return dob.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1");
        },

        xlyCheckTerms: function xlyCheckTerms() {
            var check = document.getElementById('xly-subscribe');
            if (!check.checked) {
                this.error.css({'display': 'block', 'margin-bottom': '5px', 'border-radius': '5px'});
                this.error.text('Please accept the terms and conditions');
                this.subField.css({'color': 'red'});
            } else {
                this.subField.css({'color': '#B2B2B2'});
            }
            return check.checked;
        },

        autofill: function () {
            var milliseconds = new Date().getTime();
            this.firstNameField.val('Jake');
            this.lastNameField.val('Smith');
            this.emailField.val('Jake' + milliseconds + '@email.com');
            this.phoneField.val('07920599089');
            this.postcodeField.val('Cf64 1AZ');
            this.addressField.val('11 Church Avenue');
            this.townField.val('Penarth');
            this.genderField.val('Male');
            this.dobField.val('24/05/1992');
        },

        expresslyContinue: function (event) {
            xlyr.submitButton[0].style.display = "none";
            var closeButton = jQuery('.xly-decline')[0];
            jQuery(closeButton).css({'display': 'none'});
            var loader = jQuery('.xly-loader');
            jQuery(loader).css({'display': 'inline-block'});
            var xlyLoader = jQuery('.xly-loader')[0];
            jQuery(xlyLoader).css({
                'display': 'inline-block',
                'float': 'right',
                'margin-left': '47px',
                'padding-top': '8px'
            });
        },

        xlyThankYou: function() {
          alert('Thanks for entering the compeition! We\'ll be in touch if you\'re the lucky winner!');
        },

        ready: function (callback) {
            var ready = false;

            var detach = function () {
                if (document.addEventListener) {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                } else {
                    document.detachEvent("onreadystatechange", completed);
                    window.detachEvent("onload", completed);
                }
            };

            var completed = function () {
                if (!ready && (document.addEventListener || event.type === "load" || document.readyState === "complete")) {
                    ready = true;
                    detach();
                    callback();
                }
            };

            if (document.readyState === "complete") {
                callback();
            } else if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", completed);
                window.addEventListener("load", completed);
            } else {
                document.attachEvent("onreadystatechange", completed);
                window.attachEvent("onload", completed);

                var top = false;

                try {
                    top = window.frameElement === null && document.documentElement;
                } catch (e) {
                }

                if (top && top.doScroll) {
                    (function scrollCheck() {
                        if (ready) return;

                        try {
                            top.doScroll("left");
                        } catch (e) {
                            return setTimeout(scrollCheck, 50);
                        }

                        ready = true;
                        detach();
                        callback();
                    })();
                }
            }
        }
    };

xlyr.ready(function () {
    xlyr.initialise(xlyrData.uuid, xlyrData.registerFunction);
});
