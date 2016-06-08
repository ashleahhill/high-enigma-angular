// @ngdoc service
// @name NightService
// @description
// Determine if it is night

const NightService = function() {
    var self = this;
    self.nightBegins = 17;
    self.nightEnds = 7;
    self.isNight = function isNight() {
        var now = new Date().getHours();

        return (now >= self.nightEnds && now < self.nightBegins) ? false : true;
    };
};

export default NightService;
