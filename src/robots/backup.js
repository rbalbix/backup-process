const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

module.exports = async function robot(option) {
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

    default:
      console.log('Opção inválida');
      break;
  }

  // const child = await execFile('sh', [file], (error, stdout, stderr) => {
  console.log('.......................................................');
  console.log('.........                                     .........');
  console.log('.........  Iniciando a sincronização (backup) .........');
  console.log('.........                                     .........');
  console.log('.......................................................');
  const child = await execFile(
    'rsync',
    [
      '-avrh',
      '--human-readable',
      '--stats',
      '--progress',
      '--no-owner',
      '--no-group',
      '--no-perms',
      '--del',
      '--ignore-errors',
      source,
      destination,
    ],
    (error, stdout, stderr) => {
      if (error) {
        console.error(`XXXXXX || ERROR: ${error}`);
      }
      console.log(stdout);
    }
  );
  console.log('.......................................................');
  console.log('.........                                     .........');
  console.log('.........    Fim da sincronização (backup)    .........');
  console.log('.........                                     .........');
  console.log('.......................................................');

  return;
};
