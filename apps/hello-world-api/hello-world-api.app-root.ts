import Application from 'express';
import cors from 'cors';
import { getPort } from './get-port';
import { getMockRoute } from './mock-route';

export const expressApp = async () => {
  const app = Application();
  app.use(cors());
  const port = await getPort();
  registerRoutes(app);
  app.listen(port, () => {
    console.log(`node-app app listening on port ${port}`);
  });
};

function registerRoutes(app: Application.Application) {
  const mockRoute = getMockRoute();
  const routes = [mockRoute];
  routes.forEach(route => {
    app[route.method](route.route, route.middlewares);
  })
}

expressApp().catch(err => {
  console.log('error from express', err);
  process.exit(1);
});