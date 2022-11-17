import Path from 'enums/path.enum';
import Login from 'pages/Login';
import Register from 'pages/Register';

const getRestrictedRoutes = ({ isLogged }) => [
  {
    component: Login,
    path: Path.Login,
    redirectTo: Path.Home,
    restrictedCondition: !isLogged,
  },
  {
    component: Register,
    path: Path.Register,
    redirectTo: Path.Home,
    restrictedCondition: !isLogged,
  },
];

export default getRestrictedRoutes;
