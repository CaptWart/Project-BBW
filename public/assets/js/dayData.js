$(function() {
  const url = new URL(window.location.href);
  const user = parseInt(url.searchParams.get("user"));
  const day = parseInt(url.searchParams.get("day"));
  console.log(`user: ${user}, day: ${day}`);
  console.log(typeof user);
  console.log(typeof day);

  $(document).on("click", ".addFitness", function() {
    const dataID = $(this).attr("data-id");
    const workoutData = $(`.workoutData[data-id=${dataID}]`).text();
    const weightData = $(`.weightData[data-id=${dataID}]`).text();
    const setsData = $(`.setsData[data-id=${dataID}]`).text();
    const repsData = $(`.repsData[data-id=${dataID}]`).text();
    const timeData = $(`.timeData[data-id=${dataID}]`).text();

    const newFitness = {
      workout: workoutData,
      weight: weightData,
      sets: setsData,
      reps: repsData,
      time: timeData,
      day: day,
      userid: user
    };

    $.post("/api/fitnesses", newFitness, function(data) {
      console.log("data posted: ", data);
    });
  });

  function displayData() {

    $.get(queryURL, function() {
    //   `<tr>
    //   <td class="tbData" contenteditable="true">${item}</td>
    //   <td class="tbData" contenteditable="true">${cost}</td>
    //   <td>
    //     <span class="table-remove">
    //       <button type="button"
    //       class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
    //     </span>
    //   </td>
    //   </tr>`;
    });
  }

});