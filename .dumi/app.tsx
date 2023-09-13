// @ts-ignore
import { Navigate } from 'dumi';
import React from 'react';

export const patchClientRoutes = ({ routes }: any) => {
  routes[0].children[0].children.unshift({
    id: 'test-redirect',
    path: 'hello/redirect',
    element: <Navigate to="/" />,
  });

  return routes;
};
