import UsersController from './users.controller';
import UsersService from './users.service';

// Prepare the 'users' module for subsequent registration of controllers and delegates
export default angular.module('users', [ 'ngMaterial' ])
  .controller('UsersController', UsersController)
  .service('userService', UsersService)
  .name;
