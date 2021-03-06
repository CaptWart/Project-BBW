module.exports = function(sequelize, DataTypes) {
  const Food = sequelize.define("food", {
    item: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    day: DataTypes.INTEGER
  });

  Food.associate = function(models) {
    // A Food can't be created without a User due to the foreign key constraint
    Food.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Food;
};