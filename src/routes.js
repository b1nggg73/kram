import HomePage from './pages/HomePage/HomePage';
import PostPage from './pages/PostPage/PostPage';
import { HOME_PAGE, POST_PAGE } from './utils/const';

export const publicRoutes = [
  {
    path: HOME_PAGE,
    element: <HomePage />,
  },
  { path: POST_PAGE + '/:id', element: <PostPage /> },
];
