(function(){
  'use strict';

  angular
    .module("llegaprimero", [])
    .directive("cardOne", cardOne);

  function cardOne(){
      var directive = {
        restrict: 'EA',
        templateUrl: '/partials/cardone.html',
        controller:   oneController,
        controllerAs: 'one',
        replace : true
      };
      return directive;
  }

  oneController.$inject= ["$scope"];

  function oneController($scope){
    var one = this;

    one.list = [
      {'id':'MX-HID', 'name':'Hidalgo'},
      {'id':'MX-AGU', 'name':'Aguascalientes'},
      {'id':'MX-CHH',  'name':'Chihuahua'},
      {'id':'MX-PUE', 'name':'Puebla'},
    ];
    one.over = null;
  }

})();