import angular from 'angular';
import ngMaterial from 'angular-material';
import Users from './src/components/users/users.js';

import './assets/app.css';
import 'angular-material/angular-material.css';

angular.module('app', [Users, ngMaterial])
  .config(function($mdThemingProvider, $mdIconProvider){

    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
      .icon("share"      , "./assets/svg/share.svg"       , 24)
      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');

  });;

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app']);
})