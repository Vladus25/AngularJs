angular.module('myApp', [])
  .controller('myController', function ($scope) {
    $scope.items = [];
    $scope.newItem = '';
    $scope.selectedItem = null;

    $scope.addItem = function () {
      if ($scope.newItem) {
        $scope.items.push($scope.newItem);
        $scope.newItem = '';
      }
    };

    $scope.removeItem = function () {
      if ($scope.selectedItem !== null) {
        $scope.items.splice($scope.selectedItem, 1);
        $scope.selectedItem = null;
      }
    };

    $scope.selectItem = function (index) {
      $scope.selectedItem = index;
    };
    $scope.addItem = function () {
        if ($scope.newItem) {
          $scope.items.push($scope.newItem);
          $scope.newItem = '';
          $scope.searchTerm = '';
        }
    };

      
  });

// angular.module("myApp", []).controller("userController", function ($scope) {
//     $scope.utente = { nome: "Mario", cognome: "Rossi" };
//     $scope.saluta = function () {
//         return (
//             "Buongiorno " + $scope.utente.nome + " " + $scope.utente.cognome + "!"
//         );
//     };
//     $scope.elencoCitta = [
//         {nome: "Roma", regione: "Lazio"},
//         {nome: "Latina", regione: "Lazio"},
//         {nome: "Milano", regione: "Lombardia"},
//         {nome: "Napoli", regione: "Campania"},
//         {nome: "Como", regione: "Lombardia"},
//         {nome: "Palermo", regione: "Sicilia"},
//         {nome: "Caserta", regione: "Campania"},
//         {nome: "Avellino", regione: "Campania"},
//         {nome: "Trapani", regione: "Sicilia"},
//         {nome: "Agrigento", regione: "Sicilia"}
//     ];
// });
// app.controller("userController", function ($scope) {
//     $scope.utente = { nome: "Mario", cognome: "Rossi" };
//     $scope.saluta = function () {
//         return (
//             "Buongiorno " + $scope.utente.nome + " " + $scope.utente.cognome + "!"
//         );
//     };
// });
