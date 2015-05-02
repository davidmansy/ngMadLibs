/**
 * Created by davidmansy on 02/05/15.
 */
angular
  .module('app', [])
  .controller('Main', Main);

function Main() {
  var vm = this;
  vm.gender = 'Male';
  vm.maleName = 'Male name';
  vm.jobTitle = 'Job title';
  vm.tediousTask = 'Tedious task';
  vm.dirtyTask = 'Dirty task';
  vm.celebrity = 'Celebrity';
  vm.uselessSkill = 'Useless Skill';
  vm.obnoxiousCelebrity = 'Obnoxious Celebrity';
  vm.hugeNumber = 'Huge Number';
  vm.adjective = 'Adjective';
}