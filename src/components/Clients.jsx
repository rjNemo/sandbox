import React from "react";
import "./Clients.scss";

const Clients = ({ items }) => (
  <div className="columns is-centered is-multiline">
    {items.map((item, index) => (
      <div className="column is-narrow has-text-centered" key={index}>
        <div className="Clients__logo">
          <img src={item.image} width={item.width} alt={item.name} />
        </div>
      </div>
    ))}
  </div>
);

export default Clients;
