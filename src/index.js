const robots = {
  input: require('./robots/input'),
  backup: require('./robots/backup'),
};

async function start() {
  const option = robots.input();
  robots.backup(option);
}

start();
