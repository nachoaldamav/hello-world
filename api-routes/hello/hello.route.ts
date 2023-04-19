import type { Route } from './route';

export function getHelloRoute(): Route {
  return {
    method: 'get',
    route: '/hello',
    middlewares: [async (req, res) => res.send('Hello World!')]
  }
}