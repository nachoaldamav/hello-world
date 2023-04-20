import { Ssh, SshOptions } from '@greeters/development.deployers.ssh-deployer';

const config: SshOptions = {
  host: 'xxxx',
  username: 'xxx',
  cwd: './',
  privateKey: '/Users/<my_user>/key.pem',
  runCommand: 'npm install && npm run build --if-present && forever stopall && nohup forever api/index.js  &> /dev/null &',
};

Ssh.deploy(config);
