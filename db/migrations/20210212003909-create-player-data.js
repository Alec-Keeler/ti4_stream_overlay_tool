'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlayerData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      faction: {
        allowNull: false,
        type: Sequelize.STRING
      },
      playerColor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      firstStrat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      secondStrat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalStrat: {
        allowNull: false,
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlayerData');
  }
};