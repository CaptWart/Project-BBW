module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("user", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING
  });
  return User;
};