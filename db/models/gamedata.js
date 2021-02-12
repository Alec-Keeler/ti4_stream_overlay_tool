'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameData = sequelize.define('GameData', {
    tournyRound: DataTypes.INTEGER,
    firstRoundOrder: DataTypes.STRING,
    secondRoundOrder: DataTypes.STRING,
    finalRoundOrder: DataTypes.STRING,
    finalRoundNum: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {});
  GameData.associate = function(models) {
    // associations can be defined here
  };
  return GameData;
};