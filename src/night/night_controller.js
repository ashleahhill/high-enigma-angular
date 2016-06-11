const $inject = ['$scope', 'NightService'];

const NightController = function ($scope, NightService)  {

    $scope.isNight =  NightService.isNight();
    
};

NightController.$inject = $inject;

export default NightController;
