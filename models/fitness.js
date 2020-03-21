module.exports = function(sequelize, DataTypes) {
  const Fitness = sequelize.define("fitness", {
    workout: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    time: DataTypes.INTEGER
  });
  return Fitness;
};