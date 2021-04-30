import React from "react";
import { motion } from "framer-motion";
const Card = (props) => {
  return (
    <motion.div
      class="card"
      style={{
        marginTop: "30px",

        boxShadow: "0 8px 8px #00004d",
        border: "2px solid #00004d",
      }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        class="card-img-top"
        src={props.item.image}
        alt="logo"
        style={{ height: "250px" }}
      />
      <div
        class="card-body"
        style={{
          height: "252px",
          backgroundColor: "#dcae96",
          color: "#00004d",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>{props.item.title}</h4>
        <p class="card-text">{props.item.subtitle}</p>
      </div>
      <a href="/contact" class="btn btn-primary">
        Contact us
      </a>
    </motion.div>
  );
};

export default Card;
