'use strict';

var submitEmailForm = function(e) { 
    var formData = {
        "name": $('input[name="name"]').val(),
        "from": $('input[name="email"]').val(),
        "subject": $('input[name="subject"]').val(),
        "message": $('textarea[name="message"]').val(),

        valid : function() {
            if (this.name !== "" && this.from !== "" && this.message !== "") {
                return true;
            } else {
                return false;
            }
        }    
    };

    if (!formData.valid()) {       
        invalidFields();
        return;
     }
     
     function resetform() {
        document.getElementById("emailForm").reset();
    }  
    
    var formDataJson = JSON.stringify(formData);
    
    var mailApi = "http://mailer-drstankov.rhcloud.com/sendmail";
       
    $.ajax({
        url: mailApi,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: emailSent,
        error: emailNotSent,
        data: formDataJson
    });
    
          
}


// msg when the mail is send
var emailSent = function(data, status, request) {    
    $("#infomsg").fadeIn(200).delay(3500).fadeOut(400);          
};

// msg when there is an error
var emailNotSent = function(request, status, error) {
    $("#errormsg").fadeIn(200).delay(3500).fadeOut(400);
};

// msg when the mail is not valid
var invalidFields = function() {
    $("#notvalidmsg").fadeIn(200).delay(3500).fadeOut(400);
};


