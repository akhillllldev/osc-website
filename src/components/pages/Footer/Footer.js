import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import OSCLogo from "../../../images/osclogo.png";
import Badge from "@material-ui/core/Badge";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link
              to={"//community.mozilla.org/en/groups/open-source-community/"}
              target="_blank"
            >
              Mozilla Community Portal
            </Link>
            <Link
              to={
                "//www.mozilla.org/en-US/about/governance/policies/participation/"
              }
              target="_blank"
            >
              Community Participation Guidelines
            </Link>
            {/* <Link to='/testimonials'>Testimonials</Link> */}
            <Link to="/ebopenings">EB Openings</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact">Contact</Link>
            <Link
              to={"//github.com/Open-Source-Community-VIT-AP/"}
              target="_blank"
            >
              GitHub Organization
            </Link>
            <Link to="/sponsorships">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Events</h2>
            <Link to={"//techeden.oscvitap.org/"} target="_blank">
              TechEden
            </Link>
            <Link to="/techcast">Tech Cast Series</Link>
          </div>
          <div className="footer-link-items">
            <h2>Programs</h2>
            <Link to={"//wsoc.oscvitap.org/"} target="_blank">
              Winter Season of Code &nbsp;
              <Badge
                badgeContent={"New"}
                color="primary"
                anchorOrigin={{
                  vertical: "middle",
                  horizontal: "right",
                }}
              >
                &nbsp;
              </Badge>
            </Link>
            <Link to={"//sfd.oscvitap.org/"} target="_blank">
              Software Freedom Day
            </Link>
            <Link to={"/projects"}>Projects</Link>
          </div>
          <div className="footer-link-items">
            <h2>Chapter</h2>
            <Link to={"//wios.oscvitap.org/"} target="_blank">
              Women in Open Source
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Admin</h2>
            <Link to={"//eb.oscvitap.org/"} target="_blank">
              EB Login
            </Link>
            <Link to="/ebelections">EB Elections</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={OSCLogo} className="img" />
            </Link>
          </div>
          <small className="website-rights">
            Open Source Community: VIT-AP © {new Date().getFullYear()}
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//www.facebook.com/vitap.osc/"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.instagram.com/osc.vitap/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.youtube.com/channel/UCL7e5F8GJIkLDKiu5pv2NAw"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/company/open-source-community-vit-ap"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="social-icon-link"
              to={"//discord.gg/BXqm4PXq5p"}
              target="_blank"
              aria-label="Discord"
            >
              <FaDiscord />
            </Link>
            <Link
              className="social-icon-link"
              to={"//github.com/osc-vitap"}
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
