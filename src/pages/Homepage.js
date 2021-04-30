import React from "react";
import "./Homepage.css";
// import bookcp from "../images/bookcp.png";
// import logo from "../images/logo.png";
import { Alert, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";

import { Typography } from "@material-ui/core";
const Homepage = () => {
  const list = [
    {
      title: "Cooking Courses: ",
      subtitle:
        "Workshops, for group & couples, private and summer camps for children",
    },
    {
      title: "Catering for all occasions: ",
      subtitle: "Weddings, Engagement, Birthdays and More",
    },
    {
      title: "Deity Spa Services: ",
      subtitle:
        "Bathing, Massaging, Retouch, Repair, Painting, Outfits, and Jewellery",
    },
    {
      title: "Customised altar: ",
      subtitle: "Temple altars of all sizes and materials",
    },
    {
      title: "Art Classes: ",
      subtitle: "Sketches, Charcoal, Pastels, Acrylics and Oil painting",
    },
    {
      title: "Paintings by events: ",
      subtitle: "We create family, spiritual, and wedding couples’ paintings",
    },
  ];
  return (
    <>
      <div id="parallax-world-of-ugg">
        <section>
          <div class="parallax-one" style={{ textAlign: "center" }}>
            <h2 style={{ textShadow: "0 5px 5px white" }}>Radha's</h2>
          </div>
        </section>

        <section>
          <div
            class="block"
            style={{ backgroundColor: "#dcae96", color: "#00004d" }}
          >
            <div
              style={{
                textAlign: "center",
                width: "80vw",
                margin: "auto",
                padding: "50px 0",
              }}
            >
              <h1 style={{ margin: "1.5rem" }}>About us</h1>
              <img
                src="https://res.cloudinary.com/dvc56ayit/image/upload/v1619803851/radha%27s/logo_gfos58.png"
                style={{ width: "15rem" }}
                alt="logo"
              />
              <h6 style={{ lineHeight: "2" }}>
                <span class="first-character ny">W</span>e offer with love and
                even plain water will taste sweet. Prepare a meal from heart and
                it becomes an offering worthy to serve Kṛṣṇa. We believe
                everything belongs to Kṛṣṇa and Kṛṣṇa belongs to His beloved
                Srimati RadhaRani. We are a Kṛṣṇa conscious family in Stanmore,
                UK with our life and efforts dedicated to living a spiritually
                balanced life. With Radha’s, we offer a plethora of services:
              </h6>

              <ListGroup>
                {list.map((item) => {
                  return (
                    <ListGroup className="listItem">
                      <ListGroup.Item
                        style={{
                          backgroundColor: "#00004d",
                          color: "#dcae96",
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Typography variant="h5">{item.title}</Typography>
                          <Typography>{item.subtitle}</Typography>
                        </motion.div>
                      </ListGroup.Item>
                    </ListGroup>
                  );
                })}
              </ListGroup>
            </div>

            {/* <CarouselPage /> */}
            <h6
              style={{
                lineHeight: "2",
                textAlign: "center",
                width: "80vw",
                margin: "auto",
                padding: "50px 0",
              }}
            >
              <span class="first-character ny">W</span>e are culinary and
              gourmet artists/professional chefs with over 30 years of
              experience. We are passionate about creating traditional Indian,
              Sattvik, Ekadashi, spiritual (onion & garlic free), and fusion
              recipes. It is mentioned in religious texts, Puranas, that Srimati
              RadhaRani offers 108 Bhoga/meal preparations to Kṛṣṇa each day
              without repeating any single recipe for an eternity. Our attempt
              is to teach you to cook not just for yourself and your family’s
              palates but also for spiritual benefit. Inner satisfaction comes
              from pleasing others and who better to please and serve than Kṛṣṇa
              and then share it with your family. We invite you to join our
              cooking courses and enjoy an amazing experience to last a
              lifetime.
            </h6>
          </div>
        </section>

        <section>
          <div class="parallax-two">
            <h2>Feast on Fasting Day</h2>
          </div>
        </section>

        <section>
          <div class="block" style={{ backgroundColor: "#dcae96" }}>
            <div
              style={{
                textAlign: "center",
                width: "80vw",
                margin: "auto",
                padding: "50px 0",
              }}
            >
              <h4 style={{ lineHeight: "2", color: "#00004d" }}>
                Join our cooking courses and receive a gift of a hardbound
                Ekadashi Recipe Cookbook
                <br />
                Feast on Fasting Day! Limited time offer!
              </h4>

              <img
                src="https://res.cloudinary.com/dvc56ayit/image/upload/v1619803856/radha%27s/bookcp_wlyhxz.png"
                style={{ width: "50%", margin: "auto", height: "60%" }}
                alt="logo"
                id="book"
              />
              <Alert
                style={{
                  backgroundColor: "#00004d",
                  color: "white",
                  marginTop: "20px",
                }}
              >
                *One-time, Gift applicable while book supplies last and shipping
                restrictions may apply.
              </Alert>

              <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
