import { ReactAppOptions } from '@teambit/react';

export const HelloWorldAppApp: ReactAppOptions = {
  name: 'hello-world-app',
  entry: [require.resolve('./hello-world-app.app-root')]
};

export default HelloWorldAppApp;
