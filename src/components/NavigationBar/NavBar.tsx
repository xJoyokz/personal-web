"use client";

import { useState } from "react";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = (path: any) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="navigation-container position-absolute bottom-0 start-0 end-0">
        <div className="navigation">
          <ul>
            <li className="list">
              <Tippy delay={0} content="My cv" className="tippy">
                <Link
                  href={"/pdf/JayaWicaksana.pdf"}
                  target="_blank"
                  className="link-none"
                >
                  <span className="icon">
                    <i className="fi fi-rr-document-signed"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${
                activeLink === "/journey" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/journey")}
            >
              <Tippy delay={0} content="Journey" className="tippy">
                <Link href="/journey" className="link-none">
                  <span className="icon">
                    <i className="fi fi-rr-hiking"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${activeLink === "/home" ? "active" : ""}`}
              onClick={() => handleLinkClick("/home")}
            >
              <Tippy delay={0} content="Home" className="tippy">
                <Link href="/home" className="link-none">
                  <span className="icon" data-bs-toggle="tooltip">
                    <i className="fi fi-rr-home"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${
                activeLink === "/projects" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/projects")}
            >
              <Tippy delay={0} content="Projects" className="tippy">
                <Link href="/projects" className="link-none">
                  <span className="icon" data-bs-toggle="tooltip">
                    <i className="fi fi-rr-books"></i>
                  </span>
                </Link>
              </Tippy>
            </li>
            <li
              className={`${"list"} ${
                activeLink === "/contact" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              <Tippy delay={0} content="Contact" className="tippy">
                <Link href="/contact" className="link-none">
                  <span className="icon">
                    <i className="fi fi-rr-address-book"></i>
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
