import readline from 'readline-sync';
import chalk from 'chalk';

function askAndReturnOption ():number {
  const options = [
    chalk.yellow(`1. Backup HD para ${chalk.black.bgYellow('"REDE"')}`),
    chalk.yellow(`2. Backup ${chalk.black.bgYellow('"REDE"')} para HD`),
    chalk.yellow('3. Backup Concurso'),
    chalk.yellow('4. Teste backup')
  ];

  return readline.keyInSelect(options, 'Selecione uma opção:');
}

export { askAndReturnOption as input };
