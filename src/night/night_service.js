// @ngdoc service
// @name NightService
// @description
// Determine if it is night
const $inject = ['$rootScope'];

const NightService = function ($rootScope) {
  const self = this;

  self.nightBegins = 17;
  self.nightEnds = 7;

  $rootScope.night = {};

  self.isNight = function isNight() {
    const now = new Date().getHours();

    if (self.nightOverride === undefined) {
      $rootScope.night.isNight = !(now >= self.nightEnds && now < self.nightBegins);

      return $rootScope.night.isNight;
    }

    return $rootScope.night.isNight;
  };

  self.toggleNight = function toggleNight() {
    self.nightOverride = $rootScope.night.isNight = !$rootScope.night.isNight;

    $rootScope.$apply(); // udpdate ze directives
  };
};

NightService.$inject = $inject;


export default NightService;
