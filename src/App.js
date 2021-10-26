import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Projects from './components/Projects'
import RightNav from './components/RightNav'
import './styles/App.css'

const App = () => {
  return (
      <BrowserRouter>
      <div className="home">
        <LeftNav/>
        <RightNav/>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
  )
}

export default App
