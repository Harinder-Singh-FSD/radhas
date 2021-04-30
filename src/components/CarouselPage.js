import React from "react";
import { Carousel, Button } from "react-bootstrap";
import one from "../images/one.jpg";
import two from "../images/two.jpeg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import five from "../images/five.jpg";
import six from "../images/six.jpg";

const CarouselPage = () => {
  const finalList = [
    {
      image: one,
      title: "Cooking Courses",
      subtitle:
        "Workshops, for group &amp; couples, private and bootcamps for children",
    },
    {
      image: two,
      title: "Catering for all occasions",
      subtitle: "weddings, engagement, birthdays and more",
    },
    {
      image: three,
      title: "Deity Spa Services",
      subtitle:
        "bathing, massaging, retouch, repair, painting, outfits, and jewellery",
    },
    {
      image: four,
      title: "Customised altar",
      subtitle: "Temple altars of all sizes and materials",
    },
    {
      image: five,
      title: "Art Classes",
      subtitle: "sketches, charcoal, pastels, acrylics, and oil painting",
    },
    {
      image: six,
      title: "Paintings by events",
      subtitle: "we create family, spiritual, and wedding couples’ paintings",
    },
  ];
  return (
    <Carousel fade>
      {finalList.map((item) => {
        return (
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
              style={{ height: "100vh" }}
            />
            <Carousel.Caption style={{ top: "40%" }}>
              <h1
                className="carousel-Title"
                style={{
                  textShadow: "0 2px 2px black",
                  color: "white",
                }}
              >
                {item.title}
              </h1>
              <h5
                style={{
                  textShadow: "0 2px 2px black",
                  color: "white",
                }}
              >
                {item.subtitle}
              </h5>
              <Button
                variant="outline-primary"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e986f2, #b3a2ff, #79b6ff, #50c4ff, #57cdee)",
                  color: "white",
                  border: "1px solid #57CDEE",
                  borderRadius: "5px",
                  margin: "30px",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled
              >
                Click to Know More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselPage;
