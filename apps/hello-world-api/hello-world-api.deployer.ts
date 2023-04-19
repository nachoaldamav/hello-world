import { Ssh, SshOptions } from '@greeters/development.deployers.ssh-deployer';

const lightsailOptions = {
  host: '13.228.159.236',
  username: 'bitnami',
  cwd: './api',
  privateKey: 'key',
  port: 22,
  runCommand: 'npm install && npm run build --if-present && forever stopall && nohup forever api/index.js  &> /dev/null &',
} as SshOptions;

const HelloWorldAPI = new Ssh(lightsailOptions);

export default HelloWorldAPI
