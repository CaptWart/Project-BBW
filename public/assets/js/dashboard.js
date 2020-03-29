const userID = $("#userId").data("id");
let totalCalories = 0;
let totalWeightMoved = 0;
let totalMoneySpent = 0;

function getTotalCalories() {
  const data = {userId: userID};
  $.get("/api/food/total", data, function(data) {
    data.forEach(item => {
      totalCalories += item.calories;
    });
    $("#totalCalories").text(`${totalCalories} cal`);
  });
}

function getTotalWeightMoved() {
  const data = {userId: userID};
  $.get("/api/fitnesses/total", data, function(data) {
    data.forEach(workout => {
      totalWeightMoved += workout.weight * workout.sets * workout.reps;
    });
    $("#totalWeightMoved").text(`${totalWeightMoved} lbs`);
  });
}

function getTotalMoneySpent() {
  const data = {userId: userID};
  $.get("/api/money/total", data, function(data) {
    data.forEach(item => {
      totalMoneySpent += item.price;
    });
    $("#totalMoneySpent").text(`$ ${totalMoneySpent}`);
  });
}

getTotalCalories();
getTotalWeightMoved();
getTotalMoneySpent();