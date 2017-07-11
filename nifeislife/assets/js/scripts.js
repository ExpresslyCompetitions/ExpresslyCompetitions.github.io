
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch,
  autocomplete;
var componentForm = {
  // route: 'long_name',
  // locality: 'long_name',
  postal_town: 'long_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
  /** @type {!HTMLInputElement} */
  (document.getElementById('autocomplete')), {
    types: ['address'],
    componentRestrictions: { country: "uk" }
  });

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

// Function to show comleted address fields on completion

function showAddressFields() {
  const hiddenFields = document.querySelectorAll('.hidden-field');
  for (let i = 0; i < hiddenFields.length; i++) {
    hiddenFields[i].classList.remove('hidden-field');
  }
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
  showAddressFields();
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({center: geolocation, radius: position.coords.accuracy});
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
// Form validation

const form = document.querySelector('#nife-contact-form');
const error = document.querySelector('#global-error');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const postcode = document.querySelector('#postal_code');
const address1 = document.querySelector('#autocomplete');
const age = document.querySelector('#age-confirmation');
const ageLabel = document.querySelector('#age-confirmation-label')
const terms = document.querySelector('#term-confirmation');
const termsLabel = document.querySelector('#term-confirmation-label');
const city = document.querySelector('#postal_town');
const country = document.querySelector('country');
const gender = document.querySelector('#gender')

const fieldErrorStyle = 'border:1px solid red;';
const hideErrorStyle = 'border:none';

(function initialise() {
  console.log("working Local");

  form.addEventListener('submit', event => {
    register(event);
  })
})();

function register(event) {
  event.preventDefault();
  vrValidateAndChecked();
}

function xlyBuildPayload() {
  var payload = {
    merchantUuid: '748f710d-3801-41d2-9235-3c42bf7c6b80',
    email: email.value,
    fullName: firstName.value + ' ' + lastName.value,
    forename: firstName.value,
    surname: lastName.value,
    address1: address1.value,
    city: city.value,
    zip: postcode.value,
    country: country.value,
    phone: phone.value,
    gender: gender.value,
    campaigns: ['819ac1ed-827b-4304-a5c1-2e4240369e53']
  };
  xlyPrecache(payload);
}

function vrValidateAndChecked() {
  if (vrFormValidate()) {
    xlyBuildPayload();
  }
}

function vrFormValidate() {

  var isValid = true;
  var requiredDivs = form.querySelectorAll('.required');
  for (var i = 0; i < requiredDivs.length; i++) {
    if (requiredDivs[i].value === '') {
      requiredDivs[i].style.cssText = fieldErrorStyle;
      isValid = false;
    } else {
      requiredDivs[i].style.cssText = hideErrorStyle;
    }
  }

  if (isValid) {
    error.classList.add('error-hidden');
    isValid = vrValidateEmailField();
    if (isValid) {
      isValid = vrValidatePostCode();
    } if (isValid) {
      isValid = vrCheckAge();
    } if (isValid) {
      isValid = vrCheckTerms();
    }
  } else {
    error.innerHTML = 'Please ensure all fields are filled';
    error.classList.remove("error-hidden");
  }
  return isValid;
}

function vrValidatePostCode() {
  var rePostcode = /^([a-zA-Z]){1}([0-9][0-9]|[0-9]|[a-zA-Z][0-9][a-zA-Z]|[a-zA-Z][0-9][0-9]|[a-zA-Z][0-9]){1}([ ])([0-9][a-zA-z][a-zA-z]){1}$/;
  if (!rePostcode.test(postcode.value)) {
    error.classList.remove('error-hidden')
    error.innerHTML = 'Please enter a valid postcode';
    postcode.style.cssText = fieldErrorStyle;
    return false;
  }
  return true;
}

function vrValidateEmailField() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    error.classList.remove('error-hidden');
    error.innerHTML = 'Please enter a valid email address';
    email.style.cssText = fieldErrorStyle;
    return false;
  }
  return true;
}

function vrCheckAge() {
  var check = document.getElementById('age-confirmation');
  if (!check.checked) {
    error.classList.remove('error-hidden');
    error.innerHTML = 'Please confirm your age';
    ageLabel.style.cssText = 'color: red;';
  } else {
    age.style.color = '#B2B2B2';
  }
  return check.checked;
}

function vrCheckTerms() {
  var check = document.getElementById('term-confirmation');
  if (!check.checked) {
    error.classList.remove('error-hidden');
    error.innerHTML = 'Please accept the terms and conditions';
    termsLabel.style.cssText = 'color: red;';
  } else {
    terms.style.color = '#B2B2B2';
  }
  return check.checked;
}

// Fix for conflict with FastClick and Places

$(document).on({
    'DOMNodeInserted': function() {
        $('.pac-item, .pac-item span', this).addClass('needsclick');
    }
}, '.pac-container');
