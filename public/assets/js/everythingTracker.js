$(function() {
  const userID = 1;
  let dayNum;

  // Submit button (to enter the days) event handler
  $("#numDaysBtn").on("click", function() {
    $("#dayBtnDiv").empty();
    const numDays = parseInt($("#numDays").val());
    for(let i = 1; i <= numDays; i++) {
      const dayBtn = $("<button>");

      dayBtn.addClass("dayBtn btn btn-sm col-xs-12 col-sm-12 col-md-1 col-lg-1").attr({type: "button", "data-num": i}).text(`Day ${i}`);

      $("#dayBtnDiv").append(dayBtn);
    }
  });

  // Day(#) button event handler
  $(document).on("click", ".dayBtn", function() {
    dayNum = $(this).data("num");
    $(".modal-title").text(`Day ${dayNum}`);
    resetMoneyTable(); // Create money table
    resetFitnessTable(); // Create fitness table
    resetFoodTable(); // Create food table

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

  // Reset Food Table
  function resetFoodTable() {
    $("#foodTable").empty();
    createFoodTable();
  }

  // Create the user's "money" data on the table
  function createMoneyTable() {
    const data = {
      userId: userID,
      day: dayNum
    };
    // Send the GET request
    $.get("/api/money", data, function(data) {
      const numMoney = data.length;
      if(numMoney > 0) { // If data already exists
        data.forEach(item => { // Create rows of existing data
          const moneyRow = `
          <tr>
            <td data-id=${item.id} class="itemData" contenteditable="true">${item.item}</td>
            <td data-id=${item.id} class="priceData" contenteditable="true">${item.price}</td>
            <td>
                <span class="table-add float-right">
                    <a href="#!" class="text-success">
                        <i data-id=${item.id} class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
                    </a>
                </span>
            </td>
            <td>
                <span class="table-remove">
                    <button data-id=${item.id} type="button"
                    class="removeMoney btn btn-success btn-rounded btn-sm my-0">
                    Remove</button>
                </span>
            </td>
          </tr>`;
          $("#moneyTable").append(moneyRow);
        });
      }
      // New (empty) row for data entry. Set the data-id attribute value to 0.
      const newMoneyRow = `
        <tr>
          <td data-id="0" class="itemData" contenteditable="true"></td>
          <td data-id="0" class="priceData" contenteditable="true"></td>
          <td>
              <span class="table-add float-right">
                  <a href="#!" class="text-success">
                      <i data-id="0" class="addMoney fas fa-plus fa-2x" aria-hidden="true"></i>
                  </a>
              </span>
          </td>
          <td>
          </td>
        </tr>`;
      $("#moneyTable").append(newMoneyRow);
    });
  }

  // Create the user's "fitenss" data on the table
  function createFitnessTable() {
    const data = {
      userId: userID,
      day: dayNum
    };
    // Send the GET request
    $.get("/api/fitnesses", data, function(data) {
      const numFitness = data.length;
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
                <span class="table-add float-right">
                    <a href="#!" class="text-success">
                        <i data-id=${item.id} class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
                    </a>
                </span>
            </td>
            <td>
                <span class="table-remove">
                    <button data-id=${item.id} type="button"
                    class="removeFitness btn btn-success btn-rounded btn-sm my-0">
                    Remove</button>
                </span>
            </td>
          </tr>`;
          $("#fitnessTable").append(fitnessRow);
        });
      }
      // New (empty) row for data entry. Set the data-id attribute value to 0.
      const newFitnessRow = `                
      <tr>
        <td data-id="0" class="workoutData" contenteditable="true"></td>
        <td data-id="0" class="weightData" contenteditable="true"></td>
        <td data-id="0" class="setsData" contenteditable="true"></td>
        <td data-id="0" class="repsData" contenteditable="true"></td>
        <td data-id="0" class="timeData" contenteditable="true"></td>
        <td>
            <span class="table-add float-right">
                <a href="#!" class="text-success">
                    <i data-id="0" class="addFitness fas fa-plus fa-2x" aria-hidden="true"></i>
                </a>
            </span>
        </td>
        <td>
        </td>
      </tr>`;
      $("#fitnessTable").append(newFitnessRow);
    });
  }

  // Create the user's "food" data on the table
  function createFoodTable() {
    const data = {
      userId: userID,
      day: dayNum
    };
    // Send the GET request
    $.get("/api/food", data, function(data) {
      const numFood = data.length;
      if(numFood > 0) {
        data.forEach(item => {
          const foodRow = `
          <tr>
            <td data-id=${item.id} class="itemData" contenteditable="true">${item.item}</td>
            <td data-id=${item.id} class="caloriesData" contenteditable="true">${item.calories}</td>
            <td>
                <span class="table-add float-right">
                    <a href="#!" class="text-success">
                        <i data-id=${item.id} class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
                    </a>
                </span>
            </td>
            <td>
                <span class="table-remove">
                    <button data-id=${item.id} type="button"
                    class="removeFood btn btn-success btn-rounded btn-sm my-0">
                    Remove</button>
                </span>
            </td>
          </tr>`;
          $("#foodTable").append(foodRow);
        });
      }
      // New (empty) row for data entry. Set the data-id attribute value to 0.
      const newFoodRow = `
      <tr>
        <td data-id="0" class="itemData" contenteditable="true"></td>
        <td data-id="0" class="caloriesData" contenteditable="true"></td>
        <td>
            <span class="table-add float-right">
                <a href="#!" class="text-success">
                    <i data-id="0" class="addFood fas fa-plus fa-2x" aria-hidden="true"></i>
                </a>
            </span>
        </td>
        <td>
        </td>
      </tr>`;
      $("#foodTable").append(newFoodRow);
    });
  }

  // Add (POST) / Update (PUT) money
  $(document).on("click", ".addMoney", function() {
    const dataID = $(this).data("id");
    const itemData = $(`.itemData[data-id=${dataID}]`).text().trim();
    const priceData = $(`.priceData[data-id=${dataID}]`).text().trim();

    if(itemData === "" || priceData === "" || isNaN(priceData)) {
      console.log("itemData or priceData empty");
      $("#moneyAlert").show();
    } else {
      if(dataID === 0) {
        const newMoney = {
          item: itemData,
          price: priceData,
          day: dayNum,
          userId: userID
        };
        // Send the POST request
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
        // Send the PUT request
        $.ajax("/api/money", {
          type: "PUT",
          data: updatedData
        }).then(function(data) {
          console.log("data updated: ", data);
        });
      }
      $("#moneyAlert").hide();
    }
  });

  // Add (POST) / Update (PUT) fitness
  $(document).on("click", ".addFitness", function() {
    const dataID = $(this).data("id");
    let workoutData = $(`.workoutData[data-id=${dataID}]`).text().trim();
    let weightData = $(`.weightData[data-id=${dataID}]`).text().trim();
    let setsData = $(`.setsData[data-id=${dataID}]`).text().trim();
    let repsData = $(`.repsData[data-id=${dataID}]`).text().trim();
    let timeData = $(`.timeData[data-id=${dataID}]`).text().trim();

    if(workoutData === "" || isNaN(weightData) || isNaN(setsData) || isNaN(repsData) || isNaN(timeData)) {
      console.log("workoutData empty");
      $("#fitnessAlert").show();
    } else {
      if(weightData === "") {
        console.log("here!!");
        weightData = 0;
      }
      if(setsData === "") {
        setsData = 0;
      }
      if(repsData === "") {
        repsData = 0;
      }
      if(timeData === "") {
        timeData = 0;
      }

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
        // Send the POST request
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
        // Send the PUT request
        $.ajax("/api/fitnesses", {
          type: "PUT",
          data: updatedData
        }).then(function(data) {
          console.log("data updated: ", data);
        });
      }
      $("#fitnessAlert").hide();
    }
  });

  // Add (POST) / Update (PUT) food
  $(document).on("click", ".addFood", function() {
    const dataID = $(this).data("id");
    const itemData = $(`.itemData[data-id=${dataID}]`).text().trim();
    const caloriesData = $(`.caloriesData[data-id=${dataID}]`).text().trim();

    if(itemData === "" || caloriesData === "" || isNaN(caloriesData)) {
      console.log("itemData or caloriesData empty");
      $("#foodAlert").show();
    } else {
      if(dataID === 0) {
        const newFood = {
          item: itemData,
          calories: caloriesData,
          day: dayNum,
          userId: userID
        };
        // Send the POST request
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
        // Send the PUT request
        $.ajax("/api/food", {
          type: "PUT",
          data: updatedData
        }).then(function(data) {
          console.log("data updated: ", data);
        });
      }
      $("#foodAlert").hide();
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