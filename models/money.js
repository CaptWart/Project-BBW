module.exports = function(sequelize, DataTypes) {
  const Money = sequelize.define("money", {
    item: DataTypes.STRING,
    price: DataTypes.INTEGER
  });
  return Money;
};