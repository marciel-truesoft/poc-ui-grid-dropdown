MainCtrl.$inject = ['$scope', '$http'];

function MainCtrl($scope, $http) {

  $scope.gridOptions = {
    enableCellEditOnFocus: true,
    columnDefs: [
      { name: 'name' },
      { name: 'age', type: 'number' },
      {
        name: 'gender',
        editableCellTemplate: '/src/uiSelect.html',
        editDropdownOptionsArray: [
          'male',
          'female',
          'other'
        ]
      }
    ]
  };

  $http.get('/data/50_complex.json')
    .then(function (res) {
      $scope.gridOptions.data = res.data;
    });
}

export default MainCtrl;
