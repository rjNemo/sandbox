import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";

function TestimonialsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Testimonials
          items={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
              name: "Sarah Kline",
              bio:
                "Ce que j’aime dans cet outil, c’est surtout sa simplicité d’utilisation ! Enfin quelque chose de bien pensé, rassurant et moderne [...]",
              company: "Company"
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-48.jpeg",
              name: "Shawna Murray",
              role: "Software Engineer",
              bio:
                "J’ai 4 locations à gérer : j’étais vite débordé avant, mais maintenant tout est centralisé sur mon compte. Si je n'ai pas le temps de me connecter, je reçois quand même toujours les notifications par mail !",
              company: "Company"
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-12.jpeg",
              name: "Blake Elder",
              role: "Designer",
              bio:
                "Avant, j’envoyais un chèque par la poste... mais c’est bien plus pratique maintenant de payer mon loyer : réglé en un clic, trace du paiement, quittance envoyée par email...",
              company: "Company"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TestimonialsSection;
