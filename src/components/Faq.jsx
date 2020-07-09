import React from "react";
import FaqItem from "./FaqItem";

const Faq = ({ items }) => (
  <>
    {items.map((item, index) => (
      <FaqItem question={item.question} answer={item.answer} key={index} />
    ))}
  </>
);

export default Faq;
