"use client";

import { useState } from "react";
import Link from "next/link";
import Tippy from "@tippyjs/react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleLinkClick = (index: any) => {
    setActiveLink(index);
  };

  return (
    <>
      <div className="navigationContainer">
        <div className="navigation">
          <ul>
            <li className="list">
              <Tippy delay={0} content="Cv" className="tippy">
                <Link
                  href={"/pdf/JayaWicaksana.pdf"}
                  target="_blank"
                  className="link-none"
                >
                  <span className="icon">
                    <i className="fi fi-rr-envelope-open-text"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${activeLink === 0 ? "active" : ""}`}
              onClick={() => handleLinkClick(0)}
            >
              <Tippy delay={0} content="Experience" className="tippy">
                <Link href="/" className="link-none">
                  <span className="icon">
                    <i className="fi fi-rr-hiking"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${activeLink === 1 ? "active" : ""}`}
              onClick={() => handleLinkClick(1)}
            >
              <Tippy delay={0} content="Home" className="tippy">
                <Link href="/" className="link-none">
                  <span
                    className="icon"
                    data-bs-toggle="tooltip"
                    title="Home"
                    data-bs-placement="bottom"
                    data-bs-delay={0}
                  >
                    <i className="fi fi-rr-home"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${activeLink === 2 ? "active" : ""}`}
              onClick={() => handleLinkClick(2)}
            >
              <Tippy delay={0} content="Projects" className="tippy">
                <Link href="/" className="link-none">
                  <span
                    className="icon"
                    data-bs-toggle="tooltip"
                    title="Projects"
                    data-bs-placement="bottom"
                    data-bs-delay={0}
                  >
                    <i className="fi fi-rr-books"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${activeLink === 3 ? "active" : ""}`}
              onClick={() => handleLinkClick(3)}
            >
              <Tippy delay={0} content="Contact" className="tippy">
                <Link href="/" className="link-none">
                  <span
                    className="icon"
                    data-bs-toggle="tooltip"
                    title="Contact Me"
                    data-bs-placement="bottom"
                    data-bs-delay={0}
                  >
                    <i className="fi fi-rr-envelope"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <div className="indicator">
              <span></span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
