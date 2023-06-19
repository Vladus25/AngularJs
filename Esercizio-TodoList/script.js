angular.module('todoApp', [])
.controller('todoController', function($scope) {
  $scope.tasks = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: false },
    { name: 'Task 3', completed: false },
    { name: 'Task 4', completed: false },
    { name: 'Task 5', completed: false }
  ];

  $scope.addTask = function() {
    if ($scope.newTask) {
      $scope.tasks.push({ name: $scope.newTask, completed: false });
      $scope.newTask = '';
    }
  };

  $scope.removeTask = function(task) {
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index, 1);
  };

  $scope.updateTask = function(task) {
  
  };
});