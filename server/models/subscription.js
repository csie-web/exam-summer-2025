export default (sequelize, DataTypes) => {
  return sequelize.define('subscription', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subscriberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    subscribedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    indexes: [
      {
        unique: true,
        fields: ['subscriberId', 'subscribedId']
      }
    ]
  })
} 