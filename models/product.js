'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: {
				msg: 'Un produit avec ce nom existe déjà.'
			},
			validate: {
				notEmpty: { msg: 'Votre produit doit avoir un nom.' },
				notNull: { msg: 'Votre produit doit avoir un nom.' }
			}
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			validate: {
				isFloat: { msg: 'Le prix doit être un nombre décimal.'},
				notNull: { msg: 'Le produit doit avoir un prix.'},
				min: {
					args: [1],
					msg: 'Le prix doit être supérieur à zéro.'
				}
			}
		},
		types: {
			type: DataTypes.STRING,
			allowNull: false
		},
		picture: {
			type: DataTypes.STRING,
      validate: {
        isUrl: { msg: 'Le chemin de l\'image doit être une URL.'},
			}
		}
	}, {
		timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};