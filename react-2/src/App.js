import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import './App.css';
import Footer from "./components/Footer/Footer";
import Signup from "./components/Pages/Authenticationpages/Signuppages/Signup";
import Awareness from "./components/Pages/Awareness";
import Home from "./components/Pages/Home";


import Earthquakeinfo from "./components/Pages/Infopages/Earthquakeinfo";

import Floodinfo from "./components/Pages/Infopages/Floodinfo";
import Login from "./components/Pages/Authenticationpages/Loginpages/Login";
import Fireinfo from "./components/Pages/Infopages/Fireinfo";
import Covid19 from "./components/Pages/Infopages/Covid-19info";

import About from "./components/Pages/Extrapages/About";
import Contact from "./components/Pages/Extrapages/Contact";

import Death from "./components/Pages/Estimationpages/Earthquake/Death";

import Locust from "./components/Pages/Infopages/Locusts";
import Event from "./components/events/EarthquakeEventpage";
import Api from "./components/Pages/Api/Api";

import Live from "./components/Pages/Extrapages/Live";
import CovidLive from "./components/Pages/Extrapages/LiveEvents/CovidlLive/CovidLive";
import EarthquakeLive from "./components/Pages/Extrapages/LiveEvents/EarthquakeLive/EarthquakeLive";
import FloodLive from "./components/Pages/Extrapages/LiveEvents/FloodLive/FloodLive";
import Readmore from "./components/News/Readmore";
import MyBlog from "./components/My-Blog/Blog";
import ScrollToTop from "./components/ScrollToTop";
import Dead from "./components/Pages/Estimationpages/Flood/Dead";

import DeathResult from "./components/ResultPages/Earthqauke/DeathResult";
import DeadResult from "./components/ResultPages/Flood/DeadResult";

import MyNews from "./components/News/News";
import { Scroller } from "./components/Scroller";

import Demo from "./components/Demo";

import BlogData from "./components/My-Blog/BlogData";
import FloodEventpage from "./components/events/FloodEventpage";

import EarthquakeCsv from "./components/events/EarthquakeCsv";
import FloodCsv from "./components/events/Floodeventcsv";
import Logout from "./components/Pages/Authenticationpages/Loginpages/Logout";
import Profile from "./components/Pages/Authenticationpages/Loginpages/Profile";
function App() {
  return (
    <>
      <Router>
        <Scroller />
        <ScrollToTop />

        <Navbar />

        <Switch>
          <Route path="/Navbar" component={Navbar} exact />
          <Route path="/" component={Home} exact />
          <Route path="/Awareness" component={Awareness} />
          <Route path="/Contact" component={Contact} />

          
          <Route path="/Death" component={Death} />
          <Route path="/Dead" component={Dead} />


          <Route path="/sign-up" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          <Route path="/Event" component={Event} />
          <Route path="/Live" component={Live} />

          <Route path="/BlogData/:slug" component={BlogData} />
          <Route path="/MyNews" component={MyNews} />
          <Route path="/MyBlog" component={MyBlog} exact />
          <Route path="/Floodevent" component={FloodEventpage} exact />
          <Route path="/Earthquakecsv" component={EarthquakeCsv} exact />
          <Route path="/Floodeventcsv" component={FloodCsv} exact />
        </Switch>

        <Switch>
          <Route path="/Earthquakeinfo" component={Earthquakeinfo} exact />
          <Route path="/Floodinfo" component={Floodinfo} exact />
          <Route path="/Fireinfo" component={Fireinfo} exact />
          <Route path="/Covid19" component={Covid19} exact />
         
          <Route path="/Fireinfo" component={Fireinfo} />
          <Route path="/About" component={About} exact />
          <Route path="/Locust" component={Locust} exact />
          
          <Route path="/Api" component={Api} exact />
          <Route path="/CovidLive" component={CovidLive} exact />
          <Route path="/FloodLive" component={FloodLive} exact />
          <Route path="/EarthquakeLive" component={EarthquakeLive} exact />
          <Route path="/Readmore" component={Readmore} exact />

          <Route path="/DeathResult" component={DeathResult} exact />

          <Route path="/DeadResult" component={DeadResult} exact />

          <Route path="/Demo" component={Demo} />
          <Route path="/Map" component={Map} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
