import styled from 'styled-components';

import { SIDEBAR_WIDTH } from 'components/Navigation/SideBar/constants';
import Main from 'components/Layouts/NotAuthenticated/styles/Main';

const AuthenticatedMain = styled(Main)`
  margin-left: ${SIDEBAR_WIDTH};
`;

export default AuthenticatedMain;
