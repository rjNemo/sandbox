import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SignIn from "./SignIn";

import { useRouter } from "./../util/router.js";
import * as ROUTES from "../global/routes";

const SignInSection = ({ color, size, title, subtitle, buttonText }) => {
  const router = useRouter();

  // Go to page after signin
  const onSignin = () => {
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
        <SignIn
          buttonText={buttonText}
          parentColor={color}
          onSignin={onSignin}
        />
      </div>
    </Section>
  );
};

export default SignInSection;
