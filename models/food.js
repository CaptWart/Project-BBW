module.exports = function(sequelize, DataTypes) {
  const Food = sequelize.define("food", {
    item: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    day: DataTypes.INTEGER
  });
  return Food;
};