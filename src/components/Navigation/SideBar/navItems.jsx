import React from 'react';
import { BsHouse, BsSearch } from 'react-icons/bs';

import Path from 'enums/path.enum';

const navItems = [
  {
    text: 'Inicio',
    icon: <BsHouse />,
    path: Path.Home,
  },
  {
    text: 'Busqueda',
    icon: <BsSearch />,
    path: Path.Search,
  },
];

export default navItems;
