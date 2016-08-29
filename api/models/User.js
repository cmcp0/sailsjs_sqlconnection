/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'MysqlServer',
  migrate: 'safe',
  schema : true,
  attributes: {

    name : {
      type: 'string',
      columnName: 'Name',
      required: true
    },
    email : {
      type : 'email',
      unique : true,
      primaryKey: true,

      required: true

    },
    ut : {
      type : 'string',
      enum : ['default','premium'],

    },
    password : {
      type : 'string'
    }

  }
};
