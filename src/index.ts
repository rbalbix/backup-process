// const robots = {
//   input: require('./robots/input'),
//   backup: require('./robots/backup')
// };

import { input } from './robots/input';
import { backup } from './robots/backup';

function start (): void {
  // const option = robots.input();
  // robots.backup(option);

  const option = input();
  // console.log(option);

  backup(option);
}

start();
