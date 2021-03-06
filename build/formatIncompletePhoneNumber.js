'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatIncompletePhoneNumber;

var _AsYouType = require('./AsYouType');

var _AsYouType2 = _interopRequireDefault(_AsYouType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formats a (possibly incomplete) phone number.
 * The phone number can be either in E.164 format
 * or in a form of national number digits.
 * @param {string} value - A possibly incomplete phone number. Either in E.164 format or in a form of national number digits.
 * @param {string?} country - Two-letter ("ISO 3166-1 alpha-2") country code.
 * @return {string} Formatted (possibly incomplete) phone number.
 */
function formatIncompletePhoneNumber(value, country, metadata) {
  return new _AsYouType2.default(country, metadata).input(value);
}
//# sourceMappingURL=formatIncompletePhoneNumber.js.map