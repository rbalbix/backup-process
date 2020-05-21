import { keyIn } from 'readline-sync';
import chalk from 'chalk';
import { execFile } from 'child_process';

function backup (option: number):void {
  let source: string, destination: string;
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
      console.log(chalk.red(':: Operação cancelada ::'));
      break;
  }

  if (option >= 0) {
    // Confirm the backup
    console.log(' ');
    console.log(
      chalk.red(`:: Iniciando backup de [${source}] para [${destination}]`)
    );

    let key: string;
    while (!['s', 'S', 'n', 'N'].includes(key)) {
      key = keyIn('Tem certeza que deseja fazer backup ? [s/n] ');
    }

    if (key.toLowerCase() === 'n') return;

    console.log('  ');
    console.log(
      chalk.cyan('........................................................')
    );
    console.log(
      chalk.cyan('.........                                      .........')
    );
    console.log(
      chalk.cyan('.........  Iniciando a sincronização (backup)  .........')
    );
    console.log(
      chalk.cyan('.........                                      .........')
    );
    console.log(
      chalk.cyan('........................................................')
    );
    console.log('  ');

    execFile(
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
          console.error(chalk.red(`XXXXXX || ERROR: ${error}`));
        }
        console.log(stdout);

        console.log(
          chalk.cyan('........................................................')
        );
        console.log(
          chalk.cyan('.........                                     ..........')
        );
        console.log(
          chalk.cyan('.........    Fim da sincronização (backup)    ..........')
        );
        console.log(
          chalk.cyan('.........                                     ..........')
        );
        console.log(
          chalk.cyan('........................................................')
        );
      }
    );
  }
};

export { backup };
