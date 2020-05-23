import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Header from './components/header';
import Container from './components/container';
import Posts from './pages/posts';
import PostDetail from './pages/post-detail';
import PostEdit from './pages/post-edit';
import PostCreate from './pages/post-create';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Main>
        <Container>
          <Switch>
            <Route exact path="/">
              <Posts />
            </Route>

            <Route exact path="/posts/create">
              <PostCreate />
            </Route>

            <Route exact path="/posts/:id/edit">
              <PostEdit />
            </Route>

            <Route exact path="/posts/:id">
              <PostDetail />
            </Route>

            <Route path="*">Page Not Found</Route>
          </Switch>
        </Container>
      </Main>
    </div>
  );
};

export default App;

const Main = styled.main`
  padding: 2rem 0;
`;
