'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('User', [{
     email: 'John Doe',
     password: 'kouninef'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('User', null, {});
     
  }
};
