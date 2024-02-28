import { TypeAnimation } from "react-type-animation";
export default function Contact() {
  return (
    <div className="PressStart">
      <div className="Name">
        <h1>Feel free to</h1>
      </div>
      <span style={{ fontSize: "4rem", display: "inline-block" }}>
        {'{"'}
        <TypeAnimation
          sequence={["Contact Me", 1000]}
          wrapper="span"
          speed={25}
          repeat={Infinity}
        />
        {'"}'}
      </span>
      <div className="contact-info-container">
        <div className="contact-info">
          <div className="contact-box">
            <h2>Phone Number</h2>
            <p>832-938-4377</p>
          </div>
          <div className="contact-box">
            <h2>Email</h2>
            <p>alexcamb2@gmail.com</p>
          </div>
          <div className="contact-box">
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/alejandro-camberos-884323266/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>
      </div>
      <div className="BottomContact">
        <h3>
            Working 9 AM to 5 PM Mon - Thur 9 AM - 1 PM Fri
            I will respond within 24 hours of initial contact
        </h3>
      </div>
    </div>
  );
}
