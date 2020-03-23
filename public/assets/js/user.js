$(document).ready(function() {
  $("#button").click(function(){
    // console.log($("#email").val());
    // console.log($("#fname").val());
    // console.log($("#lname").val());
    const data = {
      firstname: $("#fname").val(),
      lastname: $("#lname").val(),
      description: $("#description").val(),
      email: $("#email").val(),
      profile: true
    };
    $.post("/addprofile", data, function(data, status){
      console.log("Data: " + data + "\nStatus: " + status);
    });
  });
});