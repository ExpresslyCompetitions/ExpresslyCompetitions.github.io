function xlyRegister(data) {
    var payload = {
        merchantUuid: '748f710d-3801-41d2-9235-3c42bf7c6b80',
        width: 300,
        height: 600,
        email:  data.email,
        fullName: data.firstName + ' ' + data.lastName,
        forename: data.firstName,
        surname: data.lastName,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        zip: data.zip,
        country: data.country,
        province: data.province,
        phone: data.phone,
        gender: data.gender,
        dob: data.dob
    };

    $.ajax({
        url: "https://prod.expresslyapp.com/api/adserver/banner/precache",
        type: "POST",
        data: JSON.stringify(payload),
        contentType: "application/json",
        success:  function(response) {
            var uuid = response.migrationLink.replace('https://prod.expresslyapp.com/api/redirect/customer/', '');
            window.location.href = 'https://prod.expresslyapp.com/api/redirect/migration/' + uuid + '/initiate';
        },
        error: function() {
            alert("Oops, something went wrong with your submission. Please try again.");
        }
    });
}

var xlyrData = {
    uuid: 'xxxx',
    registerFunction: function(data) { xlyRegister(data);}
};
