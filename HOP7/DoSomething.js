"use strict";
exports.__esModule = true;
var Instrument;
(function (Instrument) {
    Instrument["Piano"] = "Piano";
    Instrument["Guitar"] = "Guitar";
    Instrument["Violin"] = "Violin";
    Instrument["Cello"] = "Cello";
})(Instrument = exports.Instrument || (exports.Instrument = {}));
function play(Instrument) {
    console.log('Playing ' + Instrument + '.');
}
exports.play = play;
function testMap() {
    var map = {
        Sam: 'Professor'
    };
    map['Kim'] = 'TA';
    console.log(map['Sam']);
    console.log(map['Kim']);
}
exports.testMap = testMap;
function twoSum(nums, target) {
    //..
    return [0, 0];
}
exports["default"] = twoSum;
function twoSumSolution(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; ++i) {
        if (map[target - nums[i]] !== undefined)
            return [map[nums[i]], i];
        map[nums[i]] = i;
    }
    return [0, 0];
}
exports.twoSumSolution = twoSumSolution;
