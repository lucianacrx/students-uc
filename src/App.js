import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import Students from './components/Students/Students';
import Student from './components/Student/Student';
import AddStudent from './components/AddStudent/AddStudent';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/edit/:id" component={Student} />
          <Route path="/add" component={AddStudent} />
          <Route path="/:id" exact component={Student} />
          <Route path="/" exact component={Students} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
