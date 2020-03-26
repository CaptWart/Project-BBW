$(function() {
  // const url = new URL(window.location.href);
  // const userID = url.searchParams.get("user");
  // const userID = parseInt(url.searchParams.get("id"));
  const userID = 2;
  let dayNum;

  $("#numDaysBtn").on("click", function() {
    const numDays = parseInt($("#numDays").val());
    for(let i = 1; i <= numDays; i++) {
      const dayBtn = $("<button>");

      dayBtn.addClass("dayBtn btn btn-primary btn-rounded btn-sm m-2").attr({type: "button", "data-num": i}).text(`Day ${i}`);

      $("#dayBtnDiv").append(dayBtn);
    }
  });

  $(document).on("click", ".dayBtn", function() {
    dayNum = $(this).data("num");

    resetMoneyTable();
    resetFitnessTable();
    resetFoodTable();

    $("#dayModal").modal("show");
  });

  // Reset Money Table
  function resetMoneyTable() {
    $("#moneyTable").empty();
    createMoneyTable();
  }

  // Reset Fitness Table
  function resetFitnessTable() {
    $("#fitnessTable").empty();
    createFitnessTable();
  }

  function resetFoodTable() {
    $("#foodTable").empty();
    createFoodTable();
  }

  // Create the user's "money" data on the table
  function createMoneyTable() {
    const data = {userId: userID, day: dayNum};
    $.get("/api/money", data, function(data) {
      const numMoney = data.length;
      // let rowCount = 1;
      if(numMoney > 0) { // If data already exists
        data.forEach(item => { // Create rows of existing data
          const moneyRow = `
          <tr>
          <td data-id=${item.id} class="itemData" contenteditable="true">${item.item}</td>
          <td data-id=${item.id} class="priceData" contenteditable="true">${item.price}</td>
          <td>
              <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                      <i data-id=${item.id} class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
              <span class="table-remove">
                  <button data-id=${item.id} type="button"
                  class="removeMoney btn btn-danger btn-rounded btn-sm my-0">
                  Remove</button>
              </span>
          </td>
          </tr>`;
          $("#moneyTable").append(moneyRow);
          // rowCount++;
        });
      }
      // New (empty) row for data entry
      const newMoneyRow = `
         <tr>
         <td data-id="0" class="itemData" contenteditable="true"></td>
         <td data-id="0" class="priceData" contenteditable="true"></td>
         <td>
             <span class="table-add float-right mb-3 mr-2">
                 <a href="#!" class="text-success">
                     <i data-id="0" class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
                 </a>
             </span>
         </td>
         <td>
             <span class="table-remove">
                 <button data-id="0" type="button"
                 class="remove Money btn btn-danger btn-rounded btn-sm my-0">
                 Remove</button>
             </span>
         </td>
         </tr>`;
      $("#moneyTable").append(newMoneyRow);
    });
  }

  // Create the user's "fitenss" data on the table
  function createFitnessTable() {
    const data = {userId: userID, day: dayNum};
    $.get("/api/fitnesses", data, function(data) {
      const numFitness = data.length;
      // let rowCount = 1;
      if(numFitness > 0) { // If data already exists
        data.forEach(item => { // Create rows of existing data
          const fitnessRow = `
          <tr>
          <td data-id=${item.id} class="workoutData" contenteditable="true">${item.workout}</td>
          <td data-id=${item.id} class="weightData" contenteditable="true">${item.weight}</td>
          <td data-id=${item.id} class="setsData" contenteditable="true">${item.sets}</td>
          <td data-id=${item.id} class="repsData" contenteditable="true">${item.reps}</td>
          <td data-id=${item.id} class="timeData" contenteditable="true">${item.time}</td>
          <td>
              <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                      <i data-id=${item.id} class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
              <span class="table-remove">
                  <button data-id=${item.id} type="button"
                  class="removeFitness btn btn-danger btn-rounded btn-sm my-0">
                  Remove</button>
              </span>
          </td>`;
          $("#fitnessTable").append(fitnessRow);
          // rowCount++;
        });
      }
      // New (empty) row for data entry
      const newFitnessRow = `                
      <tr>
      <td data-id="0" class="workoutData" contenteditable="true"></td>
      <td data-id="0" class="weightData" contenteditable="true"></td>
      <td data-id="0" class="setsData" contenteditable="true"></td>
      <td data-id="0" class="repsData" contenteditable="true"></td>
      <td data-id="0" class="timeData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-id="0" class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-id="0" type="button"
              class="removeFitness btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>`;
      $("#fitnessTable").append(newFitnessRow);
    });
  }

  // Create the user's "food" data on the table
  function createFoodTable() {
    const data = {userId: userID, day: dayNum};
    $.get("/api/food", data, function(data) {
      const numFood = data.length;
      // let rowCount = 1;
      if(numFood > 0) {
        data.forEach(item => {
          const foodRow = `
          <tr>
          <td data-id=${item.id} class="itemData" contenteditable="true">${item.item}</td>
          <td data-id=${item.id} class="calorieData" contenteditable="true">${item.calories}</td>
          <td>
              <span class="table-add float-right mb-3 mr-2">
                  <a href="#!" class="text-success">
                      <i data-id=${item.id} class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
              <span class="table-remove">
                  <button data-id=${item.id} type="button"
                  class="removeFood btn btn-danger btn-rounded btn-sm my-0">
                  Remove</button>
              </span>
          </td>
          </tr>`;
          $("#foodTable").append(foodRow);
          // rowCount++;
        });
      }
      // New (empty) row for data entry
      const newFoodRow = `
      <tr>
      <td data-id="0" class="itemData" contenteditable="true"></td>
      <td data-id="0" class="calorieData" contenteditable="true"></td>
      <td>
          <span class="table-add float-right mb-3 mr-2">
              <a href="#!" class="text-success">
                  <i data-id="0" class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
              </a>
          </span>
      </td>
      <td>
          <span class="table-remove">
              <button data-id="0" type="button"
              class="removeFood btn btn-danger btn-rounded btn-sm my-0">
              Remove</button>
          </span>
      </td>
      </tr>`;
      $("#foodTable").append(newFoodRow);
    });
  }

  // Add (POST) / Update (PUT) money
  $(document).on("click", ".addMoney", function() {
    const dataID = $(this).data("id");
    const itemData = $(`.itemData[data-id=${dataID}]`).text();
    const priceData = $(`.priceData[data-id=${dataID}]`).text();

    if(dataID === 0) {
      const newMoney = {
        item: itemData,
        price: priceData,
        day: dayNum,
        userId: userID
      };

      $.post("/api/money", newMoney, function(data) {
        console.log("data posted: ", data);
        resetMoneyTable();
      });
    } else {
      const updatedData = {
        id: dataID,
        item: itemData,
        price: priceData
      };

      $.ajax("/api/money", {
        type: "PUT",
        data: updatedData
      }).then(function(data) {
        console.log("data updated: ", data);
      });
    }
  });

  // Add (POST) / Update (PUT) fitness
  $(document).on("click", ".addFitness", function() {
    const dataID = $(this).data("id");
    const workoutData = $(`.workoutData[data-id=${dataID}]`).text();
    const weightData = $(`.weightData[data-id=${dataID}]`).text();
    const setsData = $(`.setsData[data-id=${dataID}]`).text();
    const repsData = $(`.repsData[data-id=${dataID}]`).text();
    const timeData = $(`.timeData[data-id=${dataID}]`).text();

    if(dataID === 0) {
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
        resetFitnessTable();
      });
    } else {
      const updatedData = {
        id: dataID,
        workout: workoutData,
        weight: weightData,
        sets: setsData,
        reps: repsData,
        time: timeData
      };

      $.ajax("/api/fitnesses", {
        type: "PUT",
        data: updatedData
      }).then(function(data) {
        console.log("data updated: ", data);
      });
    }
  });

  // Add (POST) / Update (PUT) food
  $(document).on("click", ".addFood", function() {
    const dataID = $(this).data("id");
    const itemData = $(`.itemData[data-id=${dataID}]`).text();
    const caloriesData = $(`.calorieData[data-id=${dataID}]`).text();

    if(dataID === 0) {
      const newFood = {
        item: itemData,
        calories: caloriesData,
        day: dayNum,
        userId: userID
      };

      $.post("/api/food", newFood, function(data) {
        console.log("data posted: ", data);
        resetFoodTable();
      });
    } else {
      const updatedData = {
        id: dataID,
        item: itemData,
        calories: caloriesData
      };

      $.ajax("/api/food", {
        type: "PUT",
        data: updatedData
      }).then(function(data) {
        console.log("data updated: ", data);
      });
    }
  });

  // Remove (DELETE) money
  $(document).on("click", ".removeMoney", function() {
    const dataID = $(this).data("id");
    const deleteData = {
      id: dataID
    };
    // Send the DELETE request
    $.ajax("/api/money", {
      type: "DELETE",
      data: deleteData
    }).then(function() {
      console.log("data deleted: ", deleteData);
      resetMoneyTable();
    });
  });

  // Remove (DELETE) fitness
  $(document).on("click", ".removeFitness", function() {
    const dataID = $(this).data("id");
    const deleteData = {
      id: dataID
    };
    // Send the DELETE request
    $.ajax("/api/fitnesses", {
      type: "DELETE",
      data: deleteData
    }).then(function() {
      console.log("data deleted: ", deleteData);
      resetFitnessTable();
    });
  });

  // Remove (DELETE) food
  $(document).on("click", ".removeFood", function() {
    const dataID = $(this).data("id");
    const deleteData = {
      id: dataID
    };
    // Send the DELETE request
    $.ajax("/api/food", {
      type: "DELETE",
      data: deleteData
    }).then(function() {
      console.log("data deleted: ", deleteData);
      resetFoodTable();
    });
  });
});