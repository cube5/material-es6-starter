import HomeController from './home.controller';
import homeComponent from './home.component';

let ngModule = angular.module('home', [])
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      url: '/',
      template: '<home></home>'
    })
  })
  .component('home', homeComponent)
  .controller(HomeController, 'HomeController')

export default ngModule.name;