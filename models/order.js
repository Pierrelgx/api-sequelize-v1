'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.Product);
      Order.belongsTo(models.User);
    }
  }
  Order.init({
    user: DataTypes.INTEGER,
    product: DataTypes.INTEGER,
    amont: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    collection: DataTypes.DATE,
    secretCode: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};
