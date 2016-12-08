#!/usr/bin/env node
'use strict';var _inquirer=require('inquirer'),_inquirer2=_interopRequireDefault(_inquirer),_momentTimezone=require('moment-timezone'),_momentTimezone2=_interopRequireDefault(_momentTimezone),_table=require('table'),_informalTimezones=require('./informalTimezones'),_informalTimezones2=_interopRequireDefault(_informalTimezones);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var timezones=_momentTimezone2.default.tz.names();function trim(a){return(a||'').replace(/\s+/g,'')}var FORMAT='MM/DD/YY hh:mm a',tableConfig={columns:{0:{alignment:'center'},1:{alignment:'center'}}},questions=[{type:'input',name:'from_timezone',message:'Enter FROM timezone',default:function _default(){return'America/New_York'}},{type:'input',name:'to_timezone',message:'Enter TO timezone',default:function _default(){return'Europe/London'}}];function findTimezone(a){return timezones.find(function(b){return b.includes(a)})||_informalTimezones2.default[a]}_inquirer2.default.prompt(questions).then(function(a){var b=a.from_timezone,c=a.to_timezone;if(b=trim(b),c=trim(c),!_momentTimezone2.default.tz.zone(b)&&(b=findTimezone(b),!b))throw new Error('from_timezone is not valid');if(!_momentTimezone2.default.tz.zone(c)&&(c=findTimezone(c),!c))throw new Error('to_timezone is not valid');var d=[],e=_momentTimezone2.default.tz(b).startOf('day'),f=e.clone().add(30,'hours');for(e.add(-30,'minutes'),d.push([b,c]);e.isBefore(f);){var h=e.add(30,'minutes').clone(),i=h.clone().tz(c);d.push([h.format(FORMAT)+' '+b,i.format(FORMAT)+' '+c])}var g=(0,_table.table)(d,tableConfig);console.log(g)});