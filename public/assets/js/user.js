$(document).ready(function() {
  $("#button").click(function(){
    const data = {
      firstname: $("#fname").val(),
      lastname: $("#lname").val(),
      description: $("#description").val(),
      email: $("#email").val(),
      profile: true
    };
    $.post("/addprofile", data, function(data, status){
    });
  });
});