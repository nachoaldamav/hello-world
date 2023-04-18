import type { Route } from '../../apps/hello-world-api/route';

export function getHelloRoute(): Route {
  return {
    method: 'get',
    route: '/hello',
    middlewares: [async (req, res) => res.send('Hello World!')]
  }
}