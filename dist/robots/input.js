"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _readlinesync = require('readline-sync'); var _readlinesync2 = _interopRequireDefault(_readlinesync);
var _chalk = require('chalk'); var _chalk2 = _interopRequireDefault(_chalk);

function askAndReturnOption () {
  const options = [
    _chalk2.default.yellow(`1. Backup HD para ${_chalk2.default.black.bgYellow('"REDE"')}`),
    _chalk2.default.yellow(`2. Backup ${_chalk2.default.black.bgYellow('"REDE"')} para HD`),
    _chalk2.default.yellow('3. Backup Concurso'),
    _chalk2.default.yellow('4. Teste backup')
  ];

  return _readlinesync2.default.keyInSelect(options, 'Selecione uma opção:');
}

exports.input = askAndReturnOption;
