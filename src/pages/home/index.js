import React from "react";
import HeroSection from "./../../components/HeroSection";
import ClientsSection from "./../../components/ClientsSection";
import FeaturesSection from "./../../components/FeaturesSection";
import TestimonialsSection from "./../../components/TestimonialsSection";
import NewsletterSection from "./../../components/NewsletterSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Assistant de gestion locative"
        subtitle="Éliminez les tâches répétitives sans valeur ajoutée"
        buttonText="Commencer"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
      <ClientsSection color="light" size="normal" title="" subtitle="" />
      <FeaturesSection
        color="white"
        size="medium"
        //title="Fonctionnalités"
        //subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <TestimonialsSection
        color="light"
        size="medium"
        title="Témoignages"
        subtitle=""
      />
      <NewsletterSection
        color="white"
        size="medium"
        title="Restez connecté"
        subtitle="Recevez nos articles et nouvelles fonctionnalités"
        buttonText="S'inscrire"
        inputPlaceholder="nom@mail.fr"
        subscribedMessage="Vous êtes inscrit !"
      />
    </>
  );
}

export default HomePage;
