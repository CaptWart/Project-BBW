$(function() {
//   const url = new URL(window.location.href);
//   const user = parseInt(url.searchParams.get("user"));
//   const day = parseInt(url.searchParams.get("day"));
//   console.log(`user: ${user}, day: ${day}`);
  const user = 1; //temporal
  const day = 4; //temporal

  function getMoney() {
    $.get("/api/money", function(data) {
      const numMoney = data.length + 1;
      const moneyRow = `
      <tr>
      <td data-id=${numMoney} class="itemData" contenteditable="true"></td>
      <td data-id=${numMoney} class="priceData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-id=${numMoney} class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-id=${numMoney} type="button"
              class="btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>
      </tr>`;
      $("#moneyTable").append(moneyRow);
    });
  }

  function getFitnesses() {
    $.get("/api/fitnesses", function(data) {
      const numFitnesses = data.length + 1;
      const fitnessRow = `                
      <tr>
      <td data-id=${numFitnesses} class="workoutData" contenteditable="true"></td>
      <td data-id=${numFitnesses} class="weightData" contenteditable="true"></td>
      <td data-id=${numFitnesses} class="setsData" contenteditable="true"></td>
      <td data-id=${numFitnesses} class="repsData" contenteditable="true"></td>
      <td data-id=${numFitnesses} class="timeData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-id=${numFitnesses} class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-id=${numFitnesses} type="button"
              class="btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>`;
      $("#fitnessTable").append(fitnessRow);
    });
  }

  function getFood() {
    $.get("/api/food", function(data) {
      const numFood = data.length + 1;
      const FoodRow = `
      <tr>
      <td data-id=${numFood} class="itemData" contenteditable="true"></td>
      <td data-id=${numFood} class="calorieData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-id=${numFood} class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-id=${numFood} type="button"
              class="btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>
      </tr>`;
      $("#foodTable").append(FoodRow);
    });
  }

  getMoney();
  getFitnesses();
  getFood();

  $(document).on("click", ".addMoney", function() {
    const dataID = $(this).data("id");
    const itemData = $(`.itemData[data-id=${dataID}]`).text();
    const priceData = $(`.priceData[data-id=${dataID}]`).text();

    const newMoney = {
      item: itemData,
      price: priceData,
      day: day,
      userId: user
    };

    $.post("/api/money", newMoney, function(data) {
      console.log("data posted: ", data);
      getMoney();
    });
  });

  $(document).on("click", ".addFitness", function() {
    const dataID = $(this).data("id");
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
      userId: user
    };

    $.post("/api/fitnesses", newFitness, function(data) {
      console.log("data posted: ", data);
      getFitnesses();
    });
  });

  $(document).on("click", ".addFood", function() {
    const dataID = $(this).data("id");
    const itemData = $(`.itemData[data-id=${dataID}]`).text();
    const caloriesData = $(`.calorieData[data-id=${dataID}]`).text();

    const newFood = {
      item: itemData,
      calories: caloriesData,
      day: day,
      userId: user
    };

    $.post("/api/food", newFood, function(data) {
      console.log("data posted: ", data);
      getFood();
    });
  });

});