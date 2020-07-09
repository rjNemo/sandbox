import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

const FeaturesSection = ({ color, size, title, subtitle }) => (
  <Section color={color} size={size}>
    <div className="container">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={true}
        size={3}
      />
      <Features
        items={[
          {
            title: "Automatisez des tâches →",
            description:
              "Avis d’échéances, suivi des encaissements, comptabilité locative, quittancement, …",
            image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
          },
          {
            title: "Protégez vos intérêts →",
            description:
              "Gestion des retards de paiement, révision du loyer, régularisation des charges, …",
            image:
              "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
          },
          {
            title: "Soyez mieux accompagné →",
            description:
              "Edition du bail, assistance administrative et comptable, information juridique et fiscale, …",
            image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
          },
          {
            title: "Restez organisé (à venir) →",
            description:
              "Assignation des dépenses, archivage des justificatifs, déclaration des revenus fonciers, …",
            image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
          },
        ]}
      />
    </div>
  </Section>
);

export default FeaturesSection;
