// angular.module('myApp', [])
// .controller('FormController', function($scope) {
//   $scope.formData = {};
//   $scope.showSuccessMessage = false;

//   $scope.submitForm = function() {
//     if ($scope.contactForm.$valid) {
//       $scope.showSuccessMessage = true;
//       $scope.successMessage = `Caro ${$scope.formData.name}, il suo messaggio "${$scope.formData.message}" è stato inviato ad Email: ${$scope.formData.email}`;
//       $scope.formData = {};
//       $scope.contactForm.$setPristine();
//       $scope.contactForm.$setUntouched();
//     }
//   };
// });

angular.module('myApp', [])
  .controller('FormController', function($scope) {
    $scope.formData = {};
    $scope.showSuccessMessage = false;
    $scope.showErrorMessage = false;

    $scope.submitForm = function() {
      if ($scope.contactForm.$valid) {

        // Mostra il messaggio di successo
        $scope.showSuccessMessage = true;
        $scope.successMessage = `Caro ${$scope.formData.name}, il suo messaggio "${$scope.formData.message}" è stato inviato. Email: ${$scope.formData.email}`;

        // Resettare il modulo
        $scope.formData = {};
        $scope.contactForm.$setPristine();
        $scope.contactForm.$setUntouched();
      } else {
        // Mostra il messaggio di errore se il modulo non è valido
        $scope.showSuccessMessage = false;
        $scope.showErrorMessage = true;
        $scope.errorMessage = 'Compila correttamente tutti i campi per inviare il messaggio.';
      }
      
    };
    $scope.hideErrorMessage = function() {
        $scope.showErrorMessage = false;
    };
  });
