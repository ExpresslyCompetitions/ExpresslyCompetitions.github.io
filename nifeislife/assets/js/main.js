function xlyPrecache(payload) {

  $.ajax({
    url: "https://prod.expresslyapp.com/api/adserver/banner/precache",
    type: "POST",
    data: JSON.stringify(payload),
    contentType: "application/json",
    success: function(response) {
      window.location.href = response.migrationLink;
    },
    error: function(e) {
      console.log(e);
      alert("Oops, something went wrong with your submission. Please try again.");
    }
  });
}

var xlyrData = {
  uuid: 'xxxx',
  registerFunction: function(data) {
    xlyRegister(data);
  },
  successMessage: 'Thank you for entering the competition! We\'ll be in touch by 30 June if you are the lucky winner. \n\nYour Noxu Home account is ready, use code NOXU20 to get &pound;20 off your first order!'
};
