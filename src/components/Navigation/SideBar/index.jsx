import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import NavItem from '../NavItem';
import navItems from './navItems';

import Arrow from './styles/Arrow';
import Aside from './styles/Aside';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useHistory();

  const onToggleSideBar = () => setIsOpen((prevState) => !prevState);

  return (
    <Aside open={isOpen}>
      <Arrow active={isOpen} onClick={onToggleSideBar} />
      <NavItem.Container>
        {navItems.map(({ icon, text, path }) => (
          <NavItem
            key={text}
            isSmall={!isOpen}
            icon={icon}
            isActive={window.location.pathname === path}
            onClick={() => push(path)}
          >
            {text}
          </NavItem>
        ))}
      </NavItem.Container>
    </Aside>
  );
};

export default SideBar;
