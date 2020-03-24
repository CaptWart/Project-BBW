$(function() {
//   const url = new URL(window.location.href);
//   const userID = url.searchParams.get("user");
  const userID = 1; // temporal

  $("#numDaysBtn").on("click", function() {
    const numDays = parseInt($("#numDays").val());
    for(let i = 1; i <= numDays; i++) {
      const dayBtn = $("<button>");

      dayBtn.addClass("dayBtn btn btn-primary btn-rounded btn-sm m-2").attr({type: "button", "data-id": i}).text(`Day ${i}`);

      $("#dayBtnDiv").append(dayBtn);
    }
  });

  $(document).on("click", ".dayBtn", function() {
    // Redirect to the data page with the user ID and the value of data-id (day #)
    const user = `user=${userID}`;
    const day = `day=${$(this).data("id")}`;
    window.location.href = `./emi_dayData.html?${user}&${day}`;
  });
});