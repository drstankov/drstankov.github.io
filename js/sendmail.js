'use strict';

var submitEmailForm = function(e) { 
    var formData = {
        "name": $('input[name="name"]').val(),
        "from": $('input[name="email"]').val(),
        "subject": $('input[name="subject"]').val(),
        "message": $('textarea[name="message"]').val()
    };
    
    var formDataJson = JSON.stringify(formData);
    
    var mailApi = "http://mailer-drstankov.rhcloud.com/sendmail";
       
    $.ajax({
        url: mailApi,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            clearform();
        },
        data: formDataJson
    });
}
