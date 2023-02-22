const Topic = require('./src/models/topic');
const Test = require('./src/models/test');
const Question = require('./src/models/question');
const Answear = require('./src/models/answear');
const File = require('./src/models/file');

// Set up associations between models
Topic.hasMany(File);
Topic.hasOne(Test);
Test.belongsTo(Topic);
Test.hasMany(Question);
Question.belongsTo(Test);
Question.hasMany(Answear);
Answear.belongsTo(Question);
File.belongsTo(Topic);

module.exports = {
  Topic,
  Test,
  Question,
  Answear,
  File
};