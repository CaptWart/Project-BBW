module.exports = function(sequelize, DataTypes) {
  const Money = sequelize.define("money", {
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  });

  // Money.associate = function(models) {
  //   // A Money can't be created without a User due to the foreign key constraint
  //   Money.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Money;
};