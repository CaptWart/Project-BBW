module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING
  });

  // Associating User with Fitness, Food, and Money
  // User.associate = function(models) {
  //   // When an User is deleted, also delete any associated Fitness
  //   User.hasMany(models.Fitness, {
  //     onDelete: "cascade"
  //   });
  //   // When an User is deleted, also delete any associated Foods
  //   User.hasMany(models.Food, {
  //     onDelete: "cascade"
  //   });
  //   // When an User is deleted, also delete any associated Money
  //   User.hasMany(models.Money, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
};