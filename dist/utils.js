'use strict';Object.defineProperty(exports,'__esModule',{value:!0});exports.FORMAT=exports.NUM_HOURS=void 0;exports.trim=trim;exports.findTimezone=findTimezone;exports.isValidMomentTimezone=isValidMomentTimezone;exports.getValidZoneName=getValidZoneName;var _momentTimezone=require('moment-timezone'),_momentTimezone2=_interopRequireDefault(_momentTimezone),_informalTimezones=require('./informalTimezones'),_informalTimezones2=_interopRequireDefault(_informalTimezones);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var timezones=_momentTimezone2.default.tz.names();var NUM_HOURS=exports.NUM_HOURS=24;function trim(a){return(a||'').replace(/\s+/g,'')}function findTimezone(a){return timezones.find(function(b){return b.includes(a)})||_informalTimezones2.default[a]}function isValidMomentTimezone(a){return!!_momentTimezone2.default.tz.zone(a)}function getValidZoneName(a){var b=trim(a);if(0==b.length)throw new TypeError('Timezone '+a+' is empty. Please refer to timezones from the readme file.');if(!isValidMomentTimezone(b)&&(b=findTimezone(b),!b))throw new TypeError('Timezone '+a+' is not valid. Please refer to timezones from the readme file.');return b}var FORMAT=exports.FORMAT='MM/DD/YY hh:mm a';