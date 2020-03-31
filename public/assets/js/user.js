$(document).ready(function() {
  $("#button").click(function(){
    const data = {
      firstname: $("#fname").val(),
      lastname: $("#lname").val(),
      description: $("#description").val(),
      email: $("#email").val(),
      profile: true
    };
    if (data.firstname == '' || data.lastname == '' || data.description == ''){
      $("#required").css("display", "block");
    }
    else {
      $.post("/addprofile", data, function(data, status){
      });
      window.location='https://bodybywawa.herokuapp.com/user';
    }

  });
});