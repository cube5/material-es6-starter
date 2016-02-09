import users from './view/users.html';
export default {
  bindings: {
    users: '='
  },
  template: users,
  controller: 'UsersController as ul'
}