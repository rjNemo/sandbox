import React from "react";

import ContentSection from "../components/ContentSection";
import TeamBiosSection from "../components/TeamBiosSection";

const AboutPage = () => (
  <>
    <ContentSection
      color="primary"
      size="large"
      title="Nous vous faisons gagner du temps"
      subtitle="Plus de soucis grâce à Ruidy & TiNyny"
    />
    <TeamBiosSection
      color="white"
      size="medium"
      title="L'équipe à votre service"
      subtitle=""
    />
  </>
);

export default AboutPage;
