import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import Students from './components/Students/Students';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Students />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
