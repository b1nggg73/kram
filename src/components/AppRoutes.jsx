import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes';

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}></Route>
      ))}
    </Routes>
  );
};

export default AppRoutes;
