import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BCA Burger Wala</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <p>We give attention to genuine feedback.</p> <br />
        <h5>All right received @bcaburgerwala</h5> <br />
      </div>
      <h4>Follow Us</h4> <br />
      <aside>
        <a
          target="blank"
          href="https://www.youtube.com/@codingwithrahul_/featured"
        >
          <AiFillLinkedin />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/rahul-kumar-8b5bb91bb/"
        >
          <AiFillYoutube />
        </a>
        <a target="blank" href="https://instagram.com/ha__4r_">
          <AiFillInstagram />
        </a>
        <a target="blank" href="https://github.com/CodeHelp1">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
