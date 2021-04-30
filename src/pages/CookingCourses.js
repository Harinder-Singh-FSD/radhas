import { Typography } from "@material-ui/core";
import React from "react";
import { Row, Col} from "react-bootstrap";
import Card from "../components/Card";
const CookingCourses = () => {
  const finalList = [
    {
      image:
        "https://careunlimited.in/wp-content/uploads/2020/07/7b41f7ae3ac370c966f3931ed4ab991c.jpg",
      title: "In-Person Private Lessons",
      subtitle:
        "Offered at Radha's state-of-the-art Kitchen located in Stanmore,UK. You will individually participate in recipe preparations and learn helpful tips for creating delicious recipes for you and your family",
    },
    {
      image:
        "https://careunlimited.in/wp-content/uploads/2020/07/7b41f7ae3ac370c966f3931ed4ab991c.jpg",
      title: "Group Lessons",
      subtitle:
        "Invite family and friends to join in the fun of learning and creating specific recipes you prefer.  This Group lesson will be reserved just for your family and friends.",
    },
    {
      image:
        "https://careunlimited.in/wp-content/uploads/2020/07/7b41f7ae3ac370c966f3931ed4ab991c.jpg",
      title: "Cooking Summer Camp",
      subtitle:
        "If your children have not already explored the fun and exciting world of cooking with us, then enroll them into our Children’s Cooking Summer Camp.  We will offer this once it is safe to do so after Covid-19 Lockdown is lifted.",
    },
  ];
  return (
    <div
      style={{
        backgroundColor:   "#dcae96",
        width: "100%",
        color:"#00004d",
        margin: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Carousel fade style={{ width: "80vw", height: "20%" }}>
        {finalList.map((item) => {
          return (
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={item.image}
                alt="First slide"
                style={{ height: "60vh" }}
              />
              <Carousel.Caption style={{ top: "20%" }}>
                <h1
                  className="carousel-Title"
                  style={{
                    textShadow: "0 2px 2px black",
                    color: "white",
                  }}
                >
                  {item.title}
                </h1>

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
      <br />
      <br /> */}
      <br />
      <Typography
        variant="h5"
        style={{ backgroundColor: "#00004d", color: "white", width: "90%", borderRadius:"15px" ,padding:"10px"}}
      >
        Radha’s cooking courses are designed for beginners and advanced alike.
        Our friendly teaching style will make it extremely easy for you to
        follow all our recipes ranging from basic to advanced recipes. Join us
        from the comfort of your own home via Zoom right now or In-person
        courses offered again once Covid-19 lockdown is lifted. Radha’s cooking
        courses are offered:

        
      </Typography>
      <Row>
        {finalList.map((item) => {
          return (
            <Col lg={4} md={4} sm={6} xs={12} style={{flex:1}}>
              <Card item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CookingCourses;
