import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

  const HomePage = () => {
    return (  
      <div>
      <h1> HomePage</h1>
      </div>
       );
  } 

  const TopicsList = () => {
    return (  <div>
      <h1> TopicsList</h1>
      </div>
       );
  } 

  const TopicDetails = () => {
    return (  <div>
      <h1> TopicDetails </h1>
      </div>
       );
  } 

function App() {
    return (
      <div>
      <Switch>
      <Route exact  path='/' component={Homepage}/>
      <Route exact path='/topics' component={TopicsList}/>
      <Route  path='/topics/:topicId' component={TopicDetails}/>
      </Switch>

      </div>
    );
  }


export default App;
