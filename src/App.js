import { Notification } from "./pages/Notification.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon.js";
function App() {
  return (
    <>
      {/* 1. PAGES: 
Home, About us, Catering, Cooking Courses, Gallery, Cookbook page, Contact us */}
      <BrowserRouter>
        <Notification />
        <Header />

        <Switch>
          <Homepage exact path="/" />
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/catering">
            <ComingSoon />
          </Route>
        </Switch>
        
        <Footer />
        {/* <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/contact">
            <Contact>{ContactForm}</Contact>
          </Route>
        </Switch>
        <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
