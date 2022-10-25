'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', [{
        email: 'John Doe',
        password: "false"
      }], {});

  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Users', null, {});
    
  }
};
