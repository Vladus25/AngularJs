
angular.module('currencyConverterApp', [])
      .controller('currencyConverterController', function($scope, $http) {
        $scope.amount = 0;
        $scope.fromCurrency = 'USD';
        $scope.toCurrency = 'EUR';
        $scope.convertedAmount = 0;
        $scope.currencies = [];

        $scope.convertCurrency = function() {
          var apiUrl = 'https://api.exchangerate-api.com/v4/latest/' + $scope.fromCurrency;

          $http.get(apiUrl)
            .then(function(response) {
              var exchangeRates = response.data.rates;
              $scope.convertedAmount = $scope.amount * exchangeRates[$scope.toCurrency];
            })
            .catch(function(error) {
              console.log('Error retrieving exchange rates:', error);
            });
        };

        $http.get('https://api.exchangerate-api.com/v4/latest/USD')
          .then(function(response) {
            var currencies = response.data.rates;
            $scope.currencies = Object.keys(currencies).map(function(code) {
              return { code: code, name: currencies[code] };
            });
          })
          .catch(function(error) {
            console.log('Error retrieving currencies:', error);
          });

        $scope.$watchGroup(['amount', 'fromCurrency', 'toCurrency'], function() {
          $scope.convertCurrency();
        });
      });