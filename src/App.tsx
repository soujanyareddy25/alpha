import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Dashboard from './Dashboard/Dashboard'
import UserGroups from './UserGroups/UserGroups'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/usergroups' element={<UserGroups/>}/>
          <Route
            path="*"
            element={
              <div >
                <div className="middle">
                  <h1>COMING SOON.. Happy Friday!!</h1>
                </div>
              </div>
            }
          />
        </Routes>
      <Footer/>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Dashboard</Link>
      </nav>
    </>
  );
}
export default App;
