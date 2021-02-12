'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayerData = sequelize.define('PlayerData', {
    faction: DataTypes.STRING,
    playerColor: DataTypes.STRING,
    finalScore: DataTypes.INTEGER,
    firstStrat: DataTypes.STRING,
    secondStrat: DataTypes.STRING,
    finalStrat: DataTypes.STRING
  }, {});
  PlayerData.associate = function(models) {
    // associations can be defined here
  };
  return PlayerData;
};