import { AppDeployContext } from '@teambit/application';
import { NodeSSH } from 'node-ssh';

export type SshOptions = {
  host: string;
  username: string;
  cwd: string;
  privateKey?: (string | Buffer) & string;
  password?: string;
  port?: number;
  runCommand?: string;
};

export type DeployContext = {
  publicDir?: string;
} & AppDeployContext;

export class Ssh {
  constructor(readonly options: SshOptions) {}

  static deploy(options: SshOptions) {
    const ssh = new Ssh(options);
    return async (deployContext: DeployContext): Promise<void> => {
      await ssh.deploy(deployContext);
    };
  }

  private async deploy(context: DeployContext): Promise<void> {
    const { capsule } = context;

    const ssh = await this.sshClient;
    const remotePath = this.options.cwd;

    await ssh.execCommand(
      `sudo mkdir ${remotePath} && sudo chown $USER ${remotePath}`
    );

    await ssh.putDirectory(capsule.fs.getPath('dist'), remotePath, {
      recursive: true,
      concurrency: 10,
    });

    const files = await ssh.execCommand(`cd ${remotePath} && ls -la`);

    console.log('\nfiles', files.stdout);

    if (this.options.runCommand) {
      const run = await ssh.execCommand(this.options.runCommand);
      console.log('\nrun', run.stdout);
    }

    ssh.dispose();
  }

  private get sshClient() {
    const ssh = new NodeSSH();
    return ssh
      .connect({
        host: this.options.host,
        username: this.options.username,
        privateKey: this.options.privateKey,
      })
      .then(() => {
        return ssh;
      });
  }
}
