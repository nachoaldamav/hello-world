import { ReactAppOptions } from '@teambit/react';

const HelloWorldApp: ReactAppOptions = {
  name: 'hello-world-app',
  entry: [require.resolve('./hello-world-app.app-root')]
};

export default HelloWorldApp;
