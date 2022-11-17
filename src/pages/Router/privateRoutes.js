import Path from 'enums/path.enum';
import Home from 'pages/Home';
import Search from 'pages/Search';

const privateRoutes = [
  {
    component: Home,
    path: Path.Home,
  },
  {
    component: Search,
    path: Path.Search,
  },
];

export default privateRoutes;
