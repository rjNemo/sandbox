import React from "react";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <ContactSection
      color="white"
      size="medium"
      title="Contactez-nous"
      subtitle="C'est un jeu d'enfant"
      showNameField={true}
      buttonText="Envoyer"
    />
  );
}

export default ContactPage;
