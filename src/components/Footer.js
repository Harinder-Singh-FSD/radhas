import React from "react";
import "./Footer.css";
import toast, { Toaster } from "react-hot-toast";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  const handleClick = () => {
    toast("Coming Soon..!! ", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "white",
        backgroundColor: "#E986F2",
      },
    });
  };
  return (
    <footer class="footer">
      <Toaster />
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About us</span>
          Offer with love and even plain water will taste sweet. Prepare a meal
          from heart and it becomes an offering worthy to serve Kṛṣṇa. We
          believe everything belongs to Kṛṣṇa and Kṛṣṇa belongs to His beloved
          Srimati RadhaRani. We are a Kṛṣṇa conscious family in Stanmore, UK
          with our life and efforts dedicated to living a spiritually balanced
          life.
        </p>

        <div class="icons">
          <a onClick={handleClick} href="/">
            <FacebookIcon style={{ color: "#4267B2" }} />
          </a>
          <a href="https://www.instagram.com/Radhas_Cooking/">
            <InstagramIcon style={{ color: "#fbad50" }} />
          </a>
          <a onClick={handleClick} href="/">
            <TwitterIcon style={{ color: "#1DA1F2" }} />
          </a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="contactnumber"
        >
          <i class="fa fa-phone"></i>
          <div>
            <p> (+44) 07973 179833</p>
            <p> (+44) 07308 648019</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="Ataank108@gmail.com">Ataank108@gmail.com</a>
          </p>
        </div>
      </div>
      <div
        class="footer-right col-md-4 col-sm-6"
        style={{ textAlign: "center" }}
      >
        <img
          src="https://res.cloudinary.com/dvc56ayit/image/upload/v1619803851/radha%27s/logo_gfos58.png"
          alt="logo"
          style={{ height: "10vh" }}
        />
        <p class="menu" style={{ textAlign: "center" }}>
          <a href="/"> Home</a> |<a href="/services"> Services</a> |
          <a href="/contact"> Contact</a>
        </p>

        <p class="name"> Website Developed by Singh Creators &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
