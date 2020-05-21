"use strict";// const robots = {
//   input: require('./robots/input'),
//   backup: require('./robots/backup')
// };

var _input = require('./robots/input');
var _backup = require('./robots/backup');

function start () {
  // const option = robots.input();
  // robots.backup(option);

  const option = _input.input.call(void 0, );
  // console.log(option);

  _backup.backup.call(void 0, option);
}

start();
