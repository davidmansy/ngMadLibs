'use strict';

/**
 * Created by davidmansy on 02/05/15.
 */

angular
  .module('ngMadLibsApp', ['ngMessages'])
  .controller('MainController', MainController);

function MainController($scope) {

  var vm = this;

  vm.male = {
    name: 'male',
    he: 'he',
    his: 'his',
    him: 'him'
  };

  vm.female = {
    name: 'female',
    he: 'she',
    his: 'her',
    him: 'her'
  };

  vm.displayForm = true;

  var initForm = function() {
    vm.gender = vm.male;
    vm.name = 'Name';
    vm.jobTitle = 'Job Title';
    vm.tediousTask = 'Tedious Task';
    vm.dirtyTask = 'Dirty Task';
    vm.celebrity = 'Celebrity';
    vm.uselessSkill = 'Useless Skill';
    vm.obnoxiousCelebrity = 'Obnoxious Celebrity';
    vm.hugeNumber = 1000000;
    vm.adjective = 'Adjective';
    if ($scope.wordsForm) {
      $scope.wordsForm.$submitted = false;
    }
  };

  var toggleView = function() {
    vm.displayForm = !vm.displayForm;
  };


  initForm();

  vm.generateMadLib = function() {
    if ($scope.wordsForm.$valid) {
      toggleView();
    }
  };

  vm.reset = function() {
    initForm();
    toggleView();
  };

  vm.isInvalid = function(field) {
    return $scope.wordsForm && $scope.wordsForm.$submitted && $scope.wordsForm[field].$invalid;
  };

  vm.hasError = function(field, errorType) {
    return $scope.wordsForm && $scope.wordsForm.$submitted && $scope.wordsForm[field].$error[errorType];
  };
}