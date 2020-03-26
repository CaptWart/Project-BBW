$(function() {
  // const url = new URL(window.location.href);
  // const userID = url.searchParams.get("user");
  // const userID = parseInt(url.searchParams.get("id"));
  const userID = 1;
  let dayNum = 1;

  $("#numDaysBtn").on("click", function() {
    const numDays = parseInt($("#numDays").val());
    for(let i = 1; i <= numDays; i++) {
      const dayBtn = $("<button>");

      // dayBtn.addClass("dayBtn btn btn-primary btn-rounded btn-sm m-2").attr({type: "button", "data-num": i, "data-toggle": "modal", "data-target": "#dayModal"}).text(`Day ${i}`);

      dayBtn.addClass("dayBtn btn btn-primary btn-rounded btn-sm m-2").attr({type: "button", "data-num": i}).text(`Day ${i}`);

      $("#dayBtnDiv").append(dayBtn);
    }
  });

  $(document).on("click", ".dayBtn", function() {
    // Redirect to the data page with the user ID and the value of data-num (day #)
    // const user = `user=${userID}`;
    // const day = `day=${$(this).data("num")}`;
    dayNum = $(this).data("num");

    console.log("userID:", userID);
    console.log("typeof userID:", typeof userID);
    console.log("dayNum:", dayNum);
    console.log("typeof dayNum:", typeof dayNum);

    $("#dayModal").modal("show");
    // window.location.href = `./emi_dayData.html?${user}&${day}`;
  });

  // Code for dayData modal
  // Display the user's "money" data on the table
  function displayMoneyTable() {
    $.get(`/api/money/${userID}`, function(data) {
      const numMoney = data.length;
      let rowCount = 1;
      if(numMoney > 0) {
        data.forEach(item => {
          const moneyRow = `
          <tr>
          <td data-num=${rowCount} class="itemData" contenteditable="true">${item.item}</td>
          <td data-num=${rowCount} class="priceData" contenteditable="true">${item.price}</td>
          <td>
              <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                      <i data-num=${rowCount} class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
              <span class="table-remove">
                  <button data-num=${rowCount} type="button"
                  class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove</button>
              </span>
          </td>
          </tr>`;
          $("#moneyTable").append(moneyRow);
          rowCount++;
        });
      }
    });
  }

  // Display the user's "fitenss" data on the table
  function displayFitnessTable() {
    $.get(`/api/fitnesses/${userID}`, function(data) {
      const numFitness = data.length;
      let rowCount = 1;
      if(numFitness > 0) {
        data.forEach(item => {
          const fitnessRow = `
          <tr>
          <td data-num=${rowCount} class="workoutData" contenteditable="true">${item.workout}</td>
          <td data-num=${rowCount} class="weightData" contenteditable="true">${item.weight}</td>
          <td data-num=${rowCount} class="setsData" contenteditable="true">${item.sets}</td>
          <td data-num=${rowCount} class="repsData" contenteditable="true">${item.reps}</td>
          <td data-num=${rowCount} class="timeData" contenteditable="true">${item.time}</td>
          <td>
              <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                      <i data-num=${rowCount} class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
              <span class="table-remove">
                  <button data-num=${rowCount} type="button"
                  class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove</button>
              </span>
          </td>`;
          $("#fitnessTable").append(fitnessRow);
          rowCount++;
        });
      }
    });
  }

  // Display the user's "food" data on the table
  function displayFoodTable() {
    $.get(`/api/food/${userID}`, function(data) {
      const numFood = data.length;
      let rowCount = 1;
      if(numFood > 0) {
        data.forEach(item => {
          const foodRow = `
          <tr>
          <td data-num=${rowCount} class="itemData" contenteditable="true">${item.item}</td>
          <td data-num=${rowCount} class="calorieData" contenteditable="true">${item.calories}</td>
          <td>
              <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                      <i data-num=${rowCount} class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
              <span class="table-remove">
                  <button data-num=${rowCount} type="button"
                  class="btn btn-danger btn-rounded btn-sm my-0">
                  Remove</button>
              </span>
          </td>
          </tr>`;
          $("#foodTable").append(foodRow);
          rowCount++;
        });
      }
    });
  }

  function generateNewMoneyRow() {
    // $.get("/api/money", function(data) {
    $.get(`/api/money/${userID}`, function(data) {
      const numMoney = data.length + 1;
      const moneyRow = `
      <tr>
      <td data-num=${numMoney} class="itemData" contenteditable="true"></td>
      <td data-num=${numMoney} class="priceData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-num=${numMoney} class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-num=${numMoney} type="button"
              class="btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>
      </tr>`;
      $("#moneyTable").append(moneyRow);
    });
  }

  function generateNewFitnessRow() {
    // $.get("/api/fitnesses", function(data) {
    $.get(`/api/fitnesses/${userID}`, function(data) {
      const numFitnesses = data.length + 1;
      const fitnessRow = `                
      <tr>
      <td data-num=${numFitnesses} class="workoutData" contenteditable="true"></td>
      <td data-num=${numFitnesses} class="weightData" contenteditable="true"></td>
      <td data-num=${numFitnesses} class="setsData" contenteditable="true"></td>
      <td data-num=${numFitnesses} class="repsData" contenteditable="true"></td>
      <td data-num=${numFitnesses} class="timeData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-num=${numFitnesses} class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-num=${numFitnesses} type="button"
              class="btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>`;
      $("#fitnessTable").append(fitnessRow);
    });
  }

  function generateNewFoodRow() {
    // $.get("/api/food", function(data) {
    $.get(`/api/food/${userID}`, function(data) {
      const numFood = data.length + 1;
      const FoodRow = `
      <tr>
      <td data-num=${numFood} class="itemData" contenteditable="true"></td>
      <td data-num=${numFood} class="calorieData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-num=${numFood} class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-num=${numFood} type="button"
              class="btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>
      </tr>`;
      $("#foodTable").append(FoodRow);
    });
  }

  displayMoneyTable();
  displayFitnessTable();
  displayFoodTable();
  generateNewMoneyRow();
  generateNewFitnessRow();
  generateNewFoodRow();

  // Add (POST) money
  $(document).on("click", ".addMoney", function() {
    const dataNum = $(this).data("num");
    const itemData = $(`.itemData[data-num=${dataNum}]`).text();
    const priceData = $(`.priceData[data-num=${dataNum}]`).text();

    const newMoney = {
      item: itemData,
      price: priceData,
      day: dayNum,
      userId: userID
    };

    $.post("/api/money", newMoney, function(data) {
      console.log("data posted: ", data);
      generateNewMoneyRow();
    });
  });

  // Add (POST) fitness
  $(document).on("click", ".addFitness", function() {
    const dataNum = $(this).data("num");
    const workoutData = $(`.workoutData[data-num=${dataNum}]`).text();
    const weightData = $(`.weightData[data-num=${dataNum}]`).text();
    const setsData = $(`.setsData[data-num=${dataNum}]`).text();
    const repsData = $(`.repsData[data-num=${dataNum}]`).text();
    const timeData = $(`.timeData[data-num=${dataNum}]`).text();

    const newFitness = {
      workout: workoutData,
      weight: weightData,
      sets: setsData,
      reps: repsData,
      time: timeData,
      day: dayNum,
      userId: userID
    };

    $.post("/api/fitnesses", newFitness, function(data) {
      console.log("data posted: ", data);
      generateNewFitnessRow();
    });
  });

  // Add (POST) food
  $(document).on("click", ".addFood", function() {
    const dataNum = $(this).data("num");
    const itemData = $(`.itemData[data-num=${dataNum}]`).text();
    const caloriesData = $(`.calorieData[data-num=${dataNum}]`).text();

    const newFood = {
      item: itemData,
      calories: caloriesData,
      day: dayNum,
      userId: userID
    };

    $.post("/api/food", newFood, function(data) {
      console.log("data posted: ", data);
      generateNewFoodRow();
    });
  });
});