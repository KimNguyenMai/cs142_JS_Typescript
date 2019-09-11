"use strict";
exports.__esModule = true;
var Street = /** @class */ (function () {
    function Street(name, speedLimite, lane, isTwoWay) {
        this.name = name;
        this.speedLimite = speedLimite;
        this.lane = lane;
        this.isTwoWay = isTwoWay;
        this.traffic = 0;
    }
    Street.prototype.getname = function () {
        return this.name;
    };
    Street.prototype.getTraffic = function () {
        return this.traffic;
    };
    Street.prototype.setTraffic = function (traffic) {
        this.traffic = traffic;
    };
    Street.prototype.increaseTraffic = function (num) {
        this.setTraffic(this.getTraffic() + num);
    };
    Street.prototype.reduceTraffic = function (num) {
        this.setTraffic((this.getTraffic() - num > 0) ? (this.getTraffic() - num) : 0);
    };
    Street.prototype.printTraffic = function () {
        console.log('There are ' + this.getTraffic() +
            'vehicles on ' + this.getTraffic + '.');
    };
    return Street;
}());
exports.Street = Street;
