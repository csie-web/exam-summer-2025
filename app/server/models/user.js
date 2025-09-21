export default (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING
    }
  })
}
