const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../database/connection")

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate(models) {
//     }
//   }
//   User.init({
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     admin: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

class User extends Model {
  generateToken() {
    const token = jwt.sign(
      {
        id: this.id,
        email: this.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: '5h' }
    );
    return token;
  }
}

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;