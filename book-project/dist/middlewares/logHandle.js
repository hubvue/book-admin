"use strict";

const config = require("../config");

const log4js = require("log4js");
/**
 * 日志管理
 *log4有bug---生产消费不及时，当用户来访问的时候，log4在记日志，让用户都走了，还在记日志。
 */


module.exports = () => {
  log4js.configure({
    appenders: {
      cheese: {
        type: 'file',
        filename: config.logsDir
      }
    },
    categories: {
      default: {
        appenders: ['cheese'],
        level: 'error'
      }
    }
  });
  return log4js.getLogger('cheese');
};