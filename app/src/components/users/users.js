import UsersComponent from './users.component';
import UsersController from './users.controller';
import UsersService from './users.service';

// Prepare the 'users' module for subsequent registration of controllers and delegates
export default angular.module('users', [ 'ngMaterial' ])
  .component('userList', UsersComponent)
  .controller('UsersController', UsersController)
  .service('userService', UsersService)
  .name;
