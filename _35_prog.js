// abstract classes
// TODO: looks js generated code of the below program
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ICC = /** @class */ (function () {
    function ICC() {
    }
    ICC.prototype.getRules = function () {
        return 'Rules defined by Board';
    };
    return ICC;
}());
var BCCI = /** @class */ (function (_super) {
    __extends(BCCI, _super);
    function BCCI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BCCI.prototype.chooseVenues = function () {
        return ['Chennai', 'Mumbai', 'Pune', 'Delhi'];
    };
    return BCCI;
}(ICC));
// can't create an ICC's object
new ICC();
var iplTournament = new BCCI();
console.log(iplTournament.getRules());
console.log(iplTournament.chooseVenues());
