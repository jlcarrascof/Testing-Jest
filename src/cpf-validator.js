"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfValidator = void 0;
var CpfValidator = /** @class */ (function () {
    function CpfValidator() {
    }
    CpfValidator.prototype.validate = function (cpf) {
        if (!(/^\d+$/.test(cpf))) {
            return false;
        }
        if (cpf.length > 11) {
            return false;
        }
        if (cpf.length < 11) {
            return false;
        }
        return true;
    };
    return CpfValidator;
}());
exports.CpfValidator = CpfValidator;
