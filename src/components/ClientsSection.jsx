import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

const ClientsSection = ({ color, size, title, subtitle }) => (
  <Section color={color} size={size}>
    <div className="container">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={true}
        size={3}
      />
      <Clients
        items={[
          {
            name: "Instagram",
            image: "https://uploads.divjoy.com/logo-instagram.svg",
            width: "150px",
          },
          {
            name: "Slack",
            image: "https://uploads.divjoy.com/logo-slack.svg",
            width: "135px",
          },
          {
            name: "Tinder",
            image: "https://uploads.divjoy.com/logo-tinder.svg",
            width: "90px",
          },
          {
            name: "Spotify",
            image: "https://uploads.divjoy.com/logo-spotify.svg",
            width: "135px",
          },
        ]}
      />
    </div>
  </Section>
);

export default ClientsSection;
