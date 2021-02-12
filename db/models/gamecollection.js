'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameCollection = sequelize.define('GameCollection', {
    name: DataTypes.STRING,
    key: DataTypes.STRING
  }, {});
  GameCollection.associate = function(models) {
    // associations can be defined here
  };
  return GameCollection;
};