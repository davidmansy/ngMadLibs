'use strict';

/**
 * Created by davidmansy on 02/05/15.
 */

angular
  .module('app', ['ngMessages'])
  .controller('Main', Main);

function Main($scope) {
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

  vm.gender = vm.male;
  vm.name = 'Name';
  vm.jobTitle = 'Job title';
  vm.tediousTask = 'Tedious task';
  vm.dirtyTask = 'Dirty task';
  vm.celebrity = 'Celebrity';
  vm.uselessSkill = 'Useless Skill';
  vm.obnoxiousCelebrity = 'Obnoxious Celebrity';
  vm.hugeNumber = 'Huge Number';
  vm.adjective = 'Adjective';

  vm.displayForm = true;

  vm.generateMadLib = function() {
    vm.toggleView();
  };

  vm.toggleView = function() {
    vm.displayForm = !vm.displayForm;
  };
}