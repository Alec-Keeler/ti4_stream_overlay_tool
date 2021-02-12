'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GameData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tournyRound: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      firstRoundOrder: {
        allowNull: false,
        type: Sequelize.STRING
      },
      secondRoundOrder: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalRoundOrder: {
        allowNull: false,
        type: Sequelize.STRING
      },
      finalRoundNum: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      collectionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "GameCollections" }
      },
      playerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "PlayerData" }
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
    return queryInterface.dropTable('GameData');
  }
};