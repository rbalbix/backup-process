"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _readlinesync = require('readline-sync');
var _chalk = require('chalk'); var _chalk2 = _interopRequireDefault(_chalk);
var _child_process = require('child_process');

function backup (option) {
  let source, destination;
  switch (option) {
    case 0:
      source = '/Volumes/BALBI-640GB/Fotos';
      destination = '/Volumes/BALBI-4TB/';
      break;

    case 1:
      source = '/Volumes/BALBI-4TB/Fotos';
      destination = '/Volumes/BALBI-640GB/';
      break;

    case 2:
      source = '/Volumes/BALBI-1TB2/Concursos';
      destination = '/Volumes/BALBI-4TB/';
      break;

    case 3:
      source = '/Users/ricardobalbi/Documents/teste-backup/volume1/';
      destination = '/Users/ricardobalbi/Documents/teste-backup/volume2';
      break;

    default:
      console.log(_chalk2.default.red(':: Operação cancelada ::'));
      break;
  }

  if (option >= 0) {
    // Confirm the backup
    console.log(' ');
    console.log(
      _chalk2.default.red(`:: Iniciando backup de [${source}] para [${destination}]`)
    );

    let key;
    while (!['s', 'S', 'n', 'N'].includes(key)) {
      key = _readlinesync.keyIn.call(void 0, 'Tem certeza que deseja fazer backup ? [s/n] ');
    }

    if (key.toLowerCase() === 'n') return;

    console.log('  ');
    console.log(
      _chalk2.default.cyan('........................................................')
    );
    console.log(
      _chalk2.default.cyan('.........                                      .........')
    );
    console.log(
      _chalk2.default.cyan('.........  Iniciando a sincronização (backup)  .........')
    );
    console.log(
      _chalk2.default.cyan('.........                                      .........')
    );
    console.log(
      _chalk2.default.cyan('........................................................')
    );
    console.log('  ');

    _child_process.execFile.call(void 0, 
      'rsync',
      [
        '-arh',
        '--human-readable',
        '--stats',
        // '--progress',
        '--no-owner',
        '--no-group',
        '--no-perms',
        '--del',
        '--ignore-errors',
        // '--list-only'
        source,
        destination
      ],
      (error, stdout) => {
        if (error) {
          console.error(_chalk2.default.red(`XXXXXX || ERROR: ${error}`));
        }
        console.log(stdout);

        console.log(
          _chalk2.default.cyan('........................................................')
        );
        console.log(
          _chalk2.default.cyan('.........                                     ..........')
        );
        console.log(
          _chalk2.default.cyan('.........    Fim da sincronização (backup)    ..........')
        );
        console.log(
          _chalk2.default.cyan('.........                                     ..........')
        );
        console.log(
          _chalk2.default.cyan('........................................................')
        );
      }
    );
  }
};

exports.backup = backup;
