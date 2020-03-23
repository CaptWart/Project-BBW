module.exports = function(sequelize, DataTypes) {
  const Fitness = sequelize.define("fitness", {
    workout: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    day: DataTypes.INTEGER
  });

  Fitness.associate = function(models) {
    // A Fitness can't be created without a User due to the foreign key constraint
    Fitness.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Fitness;
};