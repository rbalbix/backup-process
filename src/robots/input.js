const readline = require('readline-sync');

module.exports = function robot() {
  return askAndReturnOption();
};

function askAndReturnOption() {
  const options = [
    '1. Backup HD para REDE',
    '2. Backup REDE para HD',
    '3. Backup Concurso',
  ];
  return readline.keyInSelect(options, 'Seleciona uma opção:');
}
