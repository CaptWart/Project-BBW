module.exports = function(sequelize, DataTypes) {
    const Fitness = sequelize.define("fitness", {
      workout: DataTypes.STRING,
      weight: DataTypes.INT,
      sets: DataTypes.INT,
      reps: DataTypes.INT,
      time: DataTypes.INT
    });
    return User;
  };
  