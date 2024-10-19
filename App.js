import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { auth } from 'firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import IssueForm from './components/IssueForm';
import IssueList from './components/IssueList';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (user ? <Redirect to="/dashboard" /> : <Login />)} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" render={() => (user ? <Dashboard /> : <Redirect to="/" />)} />
          <Route path="/issues/new" render={() => (user ? <IssueForm /> : <Redirect to="/" />)} />
          <Route path="/issues" render={() => (user ? <IssueList /> : <Redirect to="/" />)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;