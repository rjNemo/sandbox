import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SignUp from "./SignUp";

import { useRouter } from "./../util/router.js";
import * as ROUTES from "../global/routes";

const SignUpSection = ({ color, size, title, subtitle, buttonText }) => {
  const router = useRouter();

  // Go to page after signup
  const onSignup = () => {
    router.push(ROUTES.DASHBOARD);
  };

  return (
    <Section color={color} size={size}>
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          centered={true}
          size={3}
        />
        <SignUp
          buttonText={buttonText}
          parentColor={color}
          onSignup={onSignup}
        />
      </div>
    </Section>
  );
};

export default SignUpSection;
