function TimetableCtrl($scope, $http) {
    $http.get('js/items.json')
    .success(function(data) { $scope.sessions = data.sessions; })
    .error(function(data) { console.log('error') });
    // The error could show a friendly message to users.
}