import { auth } from '../../helpers/dataBase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from '@emotion/styled';
import { BurgerMenu } from './components/BurgerMenu';
import { Menu } from './components/Menu';
import { MenuProvider } from './components/menuContext';

export const NavBar = () => {
  const [user] = useAuthState(auth);

  return (
    <MenuProvider>
      <Container>
        <MennButtonWrapper>
          <BurgerMenu />
        </MennButtonWrapper>
        <Menu />
      </Container>
    </MenuProvider>
  );
};

const Container = styled.div`
  overflow: hidden;
  display: flex;
  width: 60rem;
  height: 6rem;
  border-radius: 3rem 3rem 0 0;

  background: linear-gradient(
    109.6deg,
    rgb(229, 68, 121) 11.2%,
    rgb(157, 55, 206) 91.2%
  );

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    border-radius: 0;
    height: 6vh;
    width: 100vw;
  }
`;

const MennButtonWrapper = styled.div`
  position: absolute;
  align-items: center;
  display: flex;
  height: 6rem;
  left: 3rem;
`;
