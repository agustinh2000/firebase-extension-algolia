import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { MdAccountCircle, MdLogout } from 'react-icons/md';
import Path from 'enums/path.enum';
import { selectAuthData } from 'state/selectors/auth';
import StyledLink from 'components/Link';
import { COLORS } from 'resources/colors';

import { signOut } from 'state/actions/auth';
import Header from './styles/Header';
import SubItem from '../SubItem';

const NavBar = () => {
  const { isLogged } = useSelector(selectAuthData, shallowEqual);
  const dispatch = useDispatch();

  return (
    <Header>
      <nav>
        {isLogged ? (
          <SubItem
            // TODO: Add real items
            items={[
              {
                text: 'Log Out',
                // eslint-disable-next-line react/react-in-jsx-scope
                icon: <MdLogout color={COLORS.GreyText} />,
                onClick: () => dispatch(signOut()),
              },
            ]}
          >
            <MdAccountCircle size="38" color={COLORS.SkyBlue} />
          </SubItem>
        ) : (
          <>
            <StyledLink to={Path.Login} margin="0 10px 0 0 ">
              Iniciar Sesión
            </StyledLink>
            <StyledLink to={Path.Register}>Registrarse</StyledLink>
          </>
        )}
      </nav>
    </Header>
  );
};

export default NavBar;
