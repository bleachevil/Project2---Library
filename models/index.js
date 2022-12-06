const User = require('./User');
const Books = require('./Books');

User.hasMany(Books, {
  foreignKey: 'user_id',
});

Books.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Books };
