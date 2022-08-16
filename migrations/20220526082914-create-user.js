'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // references: 'table_name',
        // referencesKey: 'table_entity ex. user_id,cid,bid',
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      department: {
        type: Sequelize.TEXT
      },
      employee_id: {
        type: Sequelize.TEXT
      },
      designation: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      remember_token: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};