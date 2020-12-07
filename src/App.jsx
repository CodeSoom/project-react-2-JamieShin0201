import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import UsersPage from './pages/UsersPage';
import RestaurantsPage from './pages/RestaurantsPage';
import VisitorCountsPage from './pages/VisitorCountsPage';
import NotFoundPage from './pages/NotFoundPage';

const GlobalStyles = css`
  body{
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const MainContainer = styled.div({
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
});

const Header = styled.header({
  width: '100%',
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#102027',
  '& h1': {
    fontSize: '1.5rem',
    margin: 0,
    padding: '1em .5em',
    maxWidth: '1176px',
    '& i': {
      width: '50px',
      color: '#FFF',
      textAlign: 'center',
    },
    '& a': {
      color: '#FFF',
      textDecoration: 'none',
    },
  },
});

const Logo = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  '& li': {
    fontSize: '1.5rem',
    '& a': {
      color: '#FFF',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    '& i': {
      width: '50px',
      color: '#FFF',
      textAlign: 'center',
    },
  },
});

const NavList = styled.ul({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyle: 'none',
  '& a': {
    color: '#FFF',
    textDecoration: 'none',
  },
  '& li': {
    marginRight: '1em',
  },
});

const SideBar = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  listStyle: 'none',
  backgroundColor: '#37474f',
  margin: 0,
  padding: 0,
  '& li': {
    width: '250px',
    display: 'flex',
    padding: '1em 0',
    ':hover': {
      cursor: 'pointer',
      background: '#102027',
    },
    '& i': {
      width: '70px',
      color: '#FFF',
      textAlign: 'center',
    },
    '& a': {
      width: '180px',
      color: '#FFF',
      textDecoration: 'none',
    },
  },
});

const Container = styled.section({
  width: '100%',
  height: '100%',
  display: 'flex',
});

const Content = styled.div({
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#eceff1',
});

export default function App() {
  return (
    <MainContainer>
      <Global styles={GlobalStyles} />
      <Header>
        <Logo>
          <li>
            <i className="fas fa-bars" />
          </li>
          <li>
            <Link to="/">Eatgo Admin</Link>
          </li>
        </Logo>
        <NavList>
          <li>
            <Link to="/">로그인</Link>
          </li>
          <li>
            <Link to="/">회원가입</Link>
          </li>
        </NavList>
      </Header>
      <Container>
        <SideBar>
          <li>
            <i className="far fa-clipboard" />
            <Link to="/">대시보드</Link>
          </li>
          <li>
            <i className="fas fa-user" />
            <Link to="/users">사용자 관리</Link>
          </li>
          <li>
            <i className="fas fa-utensils" />
            <Link to="/restaurants">식당 관리</Link>
          </li>
        </SideBar>
        <Content>
          <Switch>
            <Route exact path="/" component={VisitorCountsPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/restaurants" component={RestaurantsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
      </Container>
    </MainContainer>
  );
}
