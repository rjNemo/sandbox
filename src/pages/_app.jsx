import React from "react";

import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import SigninPage from "./signin";
import SignupPage from "./signup";
import ForgotpassPage from "./forgotpass";
import ChangepassPage from "./changepass";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Routes, Route, Router } from "../util/router.js";
import { ProvideAuth } from "../util/auth.js";
import * as ROUTES from "../global/routes";
import "../util/analytics.js";

const App = () => (
  <ProvideAuth>
    <Router>
      <>
        <Navbar
          color="white"
          spaced={true}
          logo="https://uploads.divjoy.com/logo.svg"
        />

        <Routes>
          <Route exact path={ROUTES.HOME} component={IndexPage} />
          <Route exact path={ROUTES.ABOUT} component={AboutPage} />
          <Route exact path={ROUTES.FAQ} component={FaqPage} />
          <Route exact path={ROUTES.PRICING} component={PricingPage} />
          <Route exact path={ROUTES.CONTACT} component={ContactPage} />
          <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
          <Route exact path={ROUTES.SIGNIN} component={SigninPage} />
          <Route exact path={ROUTES.SIGNUP} component={SignupPage} />
          <Route exact path={ROUTES.FORGOT_PASS} component={ForgotpassPage} />
          <Route exact path={ROUTES.CHANGE_PASS} component={ChangepassPage} />
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Routes>

        <Footer
          color="light"
          size="normal"
          logo="https://uploads.divjoy.com/logo.svg"
          copyright="© 2019 nemo.immo"
        />
      </>
    </Router>
  </ProvideAuth>
);

export default App;
