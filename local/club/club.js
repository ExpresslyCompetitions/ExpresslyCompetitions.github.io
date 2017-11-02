var club = function () {
    $.support.cors = true;
    var muid = 'm-c2b72f7d-6073-4d91-a05d-55100bc49c2b';
    var protocol = 'https:';
    var lock = false;

    var modal = {
        login: $('#modal--login'),
        register: $('#modal--register')
    };

    var form = {
        login: $('#form--login'),
        register: $('#form--register'),

        toggleFeedback: function (prefix, field, toggle) {
            console.log('#' + prefix + '--' + field);
            $('#' + prefix + '--' + field).toggleClass('is-invalid', toggle);
        },

        serialize: function (form) {
            var data = form.serializeArray();
            var result = {};
            $.map(data, function (o) {
                result[o['name']] = o['value'];
            });
            return result;
        }

    };

    var state = {
        profile: null
    };

    var strings = {
        nullToEmpty: function (s) {
            return !s || s === undefined ? '' : s;
        }
    };

    var controller = {
        login: function () {
            if (form.login.get(0).checkValidity() === true) {
                var formData = form.serialize(form.login);
                server.login(formData);
            }
            form.login.toggleClass('was-validated', true);
        },

        loginRequired: function () {
            console.log("hi");
            modal.login.modal('show')
        },

        logout: function () {
            server.logout();
        },

        register: function () {
            var formData = form.serialize(form.register);
            console.log(formData);
            if (form.register.get(0).checkValidity() === true) {
                server.register(formData);
            } else if (form.register.find('.address-fields input:invalid').length > 0){
                $('#form--register--address-fields').collapse('show');
            }
            form.register.toggleClass('was-validated', true);
        },

        setProfile: function (profile) {
            state.profile = profile;
            $('body').toggleClass("logged-in", profile !== null);
            $('.data-forename').text(profile !== null ? profile.forename : '');
        }
    };

    function printSuccess(result) {
        console.log('result');
        console.log(result);
        lock = false;
    }

    function printError(xhr, status, error) {
        console.log('error');
        console.log(xhr.responseText);
        lock = false;
    }

    var server = {
        login: function (payload) {
            server.submit("login", "POST", payload,
                function (data) {
                    modal.login.modal('hide')
                    form.toggleFeedback('form--login', 'password', false);
                    controller.setProfile(data.account)
                },
                function (xhr, status, error) {
                    if (xhr.status === 401) {
                        form.toggleFeedback('form--login', 'password', true);
                    }
                });
        },

        logout: function () {
            server.submit("logout", "POST", null,
                function (data) {
                    controller.setProfile(null)
                },
                printError);
        },

        exists: function (email) {
            server.submit("exists", "POST", {email: email}, printSuccess, printError);
        },

        profile: function () {
            server.submit("profile", "GET", null,
                function (data) {
                    controller.setProfile(data)
                },
                printError);

        },

        update: function (payload) {
            server.submit("update", "POST", payload, printSuccess, printError);
        },

        register: function (payload) {
            server.submit("register", "POST", payload, printSuccess, printError);
        },

        submit: function (uri, method, payload, success, error) {
            lock = true;
            $.ajax({
                url: protocol + "//prod.expresslyapp.com/api/club/" + muid + "/account/" + uri,
                type: method,
                data: payload ? JSON.stringify(payload) : null,
                contentType: "application/json",
                xhrFields: {withCredentials: true},
                statusCode: {
                    401: function () {
                        controller.loginRequired();
                    }
                },
                success: success,
                error: error
            });
        }
    };

    var addressAutoComplete = {
        componentForm: {
            street_number: 'short_name',
            route: 'long_name',
            postal_town: 'long_name',
            postal_code: 'short_name'
        },

        init: function () {
            $('.address-autocomplete').each(function () {
                var $this = $(this);
                console.log($(this).data('prefix'));
                var autocomplete = new google.maps.places.Autocomplete(
                    this,
                    {types: ['address'], componentRestrictions: {country: "uk"}});
                autocomplete.addListener('place_changed', function () {
                    addressAutoComplete.fillInAddress(
                        $this.data('prefix'),
                        autocomplete);
                    //addressAutoComplete.showAddressFields();
                });
            });
        },

        collectPlaceData: function (place) {
            var data = {};
            for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];
                if (addressAutoComplete.componentForm[addressType]) {
                    data[addressType] = place.address_components[i][addressAutoComplete.componentForm[addressType]];
                }
            }
            return data;
        },

        fillInAddress: function (prefix, autocomplete) {
            var data = addressAutoComplete.collectPlaceData(autocomplete.getPlace());
            $('#' + prefix + 'addressLine1').val((strings.nullToEmpty(data['street_number']) + ' ' + strings.nullToEmpty(data['route'])).trim());
            $('#' + prefix + 'addressLine2').val('');
            $('#' + prefix + 'city').val(strings.nullToEmpty(data['postal_town']));
            $('#' + prefix + 'postalCode').val(strings.nullToEmpty(data['postal_code']));
        },

        // Bias the autocomplete object to the user's geographical location,
        // as supplied by the browser's 'navigator.geolocation' object.
        geolocate: function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var geolocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var circle = new google.maps.Circle({center: geolocation, radius: position.coords.accuracy});
                    autocomplete.setBounds(circle.getBounds());
                });
            }
        },

        showAddressFields: function () {
            $('.hidden-field').removeClass('hidden-field');
        }
    };

    function buildPayload() {
        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var streetNo = $('#street_number').val();
        var streetName = $('#route').val();
        var campaigns = $('#campaign').val();
        campaigns = campaigns ? campaigns.split(",") : null;

        return {
            merchantUuid: $('#merchant').val(),
            campaigns: campaigns,
            email: email.val(),
            fullName: firstName + ' ' + lastName,
            forename: firstName,
            surname: lastName,
            address1: streetNo + ' ' + streetName,
            city: $('#postal_town').val(),
            zip: postcode.val(),
            country: 'GB',
            phone: phone.val(),
            gender: $('#gender').val(),
            source: document.referrer
        };
    }


    function globalError(message) {
        var error = $('#global-error');
        error.html(message);
        error.toggleClass("error-hidden", !message);
    }

    var validators = [
        vrValidateRequired,
        vrValidateEmailField,
        vrValidatePhoneUk,
        vrValidatePostCode,
        vrCheckAge,
        vrCheckTerms
    ];

    function validate() {
        globalError();
        $('.field-error').removeClass('field-error');

        for (var i = 0; i < validators.length; ++i) {
            var error = validators[i]();
            if (error) {
                globalError(error);
                return false;
            }
        }

        return true;
    }

    function validateRegex(field, regex) {
        var result = regex.test(field.val());
        field.toggleClass('field-error', !result);
        return result;
    }

    function validateCheckbox(field) {
        var result = field.prop('checked');
        field.toggleClass('field-error', !result);
        return result;
    }

    function vrValidateRequired() {
        var valid = true;
        $('.required').each(function () {
            if ($(this).val() === '') {
                $(this).addClass('field-error');
                valid = false;
            }
        });
        return valid ? '' : 'Please ensure all fields are filled';
    }

    function vrValidatePostCode() {
        return validateRegex(postcode, /^((?:(?:gir)|(?:[a-pr-uwyz])(?:(?:[0-9](?:[a-hjkpstuw]|[0-9])?)|(?:[a-hk-y][0-9](?:[0-9]|[abehmnprv-y])?)))) ?([0-9][abd-hjlnp-uw-z]{2})$/i)
            ? ''
            : 'Please enter a valid UK postcode';
    }

    function vrValidatePhoneUk() {
        return validateRegex(phone, /^(0|\+44|0044)\s*[1235789]\s*([0-9]\s*){9}$/)
            ? ''
            : 'Please enter a valid UK phone number';
    }

    function vrValidateEmailField() {
        return validateRegex(email, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ? ''
            : 'Please enter a valid email address';
    }

    function vrCheckAge() {
        return validateCheckbox($('#age-confirmation'))
            ? ''
            : 'Please confirm your age';
    }

    function vrCheckTerms() {
        return validateCheckbox($('#term-confirmation'))
            ? ''
            : 'Please accept the terms and conditions';
    }

    function busy(working) {
        var $button = $('#xly-submitButton');
        if (working) {
            $button.attr('disabled', 'true');
            $button.addClass('busy');
        } else {
            $button.removeAttr('disabled');
            $button.removeClass('busy');
        }
    }

    function registerEvents() {
        $('#action--register').click(function (event) {
            event.preventDefault();
            controller.register();
        });
        $('#action--logout').click(function (event) {
            event.preventDefault();
            controller.logout();
        });
        $('#action--login').click(function (event) {
            event.preventDefault();
            controller.login();
        });
        $('#action--login-to-signup').click(function (event) {
            event.preventDefault();
            modal.login.modal('hide');
            modal.register.modal('show');
        });
        console.log(addressAutoComplete);
        $('.address_autocomplete').focus(addressAutoComplete.geolocate);


        // $('#show-fields').click(showAddressFields);
    }

    server.profile();
    registerEvents();
    $('[data-toggle="tooltip"]').tooltip();


    return {
        initAutocomplete: function () {
            addressAutoComplete.init();
        },

        matchProtocol: function (value) {
            /* add this code if you want compatibility with IE9
            <!--[if IE 9]>
            <script>
                microsite.matchProtocol(true);
            </script>
            <![endif]-->
            */
            protocol = value === true ? window.location.protocol : 'https:';
        }
    };
}();

// Fix for conflict with FastClick and Places
$(function () {
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        setTimeout(function () {
            var container = document.getElementsByClassName('pac-container')[0];
            container.addEventListener('touchend', function (e) {
                e.stopImmediatePropagation();
            });
        }, 500);
    }
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
});
