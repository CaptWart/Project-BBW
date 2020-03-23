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
  return User;
};