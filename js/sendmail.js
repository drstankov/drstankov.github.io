'use strict';

//send email gi pakuva podatocite
var sendEmail = function (name,from,subject,message) {
 
    var mailApi = "http://mailer-drstankov.rhcloud.com/sendmail";   
    var email = { 
        "name": name,
        "from": from,
        "subject": subject, 
        "message": message
    };
    
    sendjson(mailApi,email);
}

// sendjson gi praka podatocite

var sendjson = function (url,data) {

  // construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // send the collected data as JSON
  xhr.send(JSON.stringify(data));

  xhr.onloadend = function () {
    
      clearform();
  };
};


//da se brisat podatocite od formata

//document --> html-dokumentot

var clearform = function () {

    var emailForm = document.getElementById("emailForm");
       
    emailForm.name.value = "";
    emailForm.email.value = "";
    emailForm.subject.value = "";
    emailForm.message.value = "";


};


//funkcija za citanje na podatocite od formata

var submitEmailForm = function (e) { 
    
    e.preventDefault();
    
    var emailForm = document.getElementById("emailForm");
    
    sendEmail(
        emailForm.name.value,
        emailForm.email.value,
        emailForm.subject.value,
        emailForm.message.value
    );
}




// form.onsubmit = function (e) {
//   // stop the regular form submission
//   e.preventDefault();

//   // collect the form data while iterating over the inputs
//   var data = {};
//   for (var i = 0, ii = form.length; i < ii; ++i) {
//     var input = form[i];
//     if (input.name) {
//       data[input.name] = input.value;
//     }
//   }

//   // construct an HTTP request
//   var xhr = new XMLHttpRequest();
//   xhr.open(form.method, form.action, true);
//   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

//   // send the collected data as JSON
//   xhr.send(JSON.stringify(data));

//   xhr.onloadend = function () {
//     // done
//   };
// };