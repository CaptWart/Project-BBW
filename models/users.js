module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    auth0: {
      type: DataTypes.STRING,
      unique: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    profile: DataTypes.BOOLEAN
  });

  // Associating User with Fitness, Food, and Money
  User.associate = function(models) {
    // When an User is deleted, also delete any associated Fitness
    User.hasMany(models.fitness, {
      onDelete: "cascade"
    });
    // When an User is deleted, also delete any associated Foods
    User.hasMany(models.food, {
      onDelete: "cascade"
    });
    // When an User is deleted, also delete any associated Money
    User.hasMany(models.money, {
      onDelete: "cascade"
    });
  };

  return User;
};