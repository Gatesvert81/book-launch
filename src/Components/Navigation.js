import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import AnchorLink from "./AnchorLink";
import Button from "./Button";
import { NavContext } from "./Context";

function Navigation() {
  const [sideNav, setSideNav] = useState(false);
  const [show, handleShow] = useState(false);

  const [page, setPage] = useContext(NavContext);

  useEffect(() => {
    const myFunc = () => {
      if (window.scrollY > 5) {
        handleShow(true);
      } else handleShow(false);
    };
    window.addEventListener("scroll", myFunc);
    return () => {
      window.removeEventListener("scroll", myFunc);
    };
  }, []);

  useEffect(() => {
    if (sideNav) {
      window.document.body.scroll = "no";
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.scroll = "yes";
      window.document.body.style.overflow = "scroll";
    }
  }, [sideNav]);

  const handleNav = (pageName) => {
    setPage(pageName);
    setSideNav(!sideNav);
  };

  return (
    <>
      <nav
        className={`w-full h-16 fixed top-0 left-0 z-30 flex justify-between items-center px-10 lg:px-36 py-2 transition ease-in-out ${
          show ? "bg-white/70 backdrop-blur-md" : "transparent"
        } ${sideNav ? "bg-white/70 backdrop-blur-md" : "transparent"} `}
      >
        <div className="hidden md:flex gap-5">
          <AnchorLink route="/">
            <Button
              style={`side-nav-btn ${page === "home" ? "page" : null} `}
              click={() => setPage("home")}
            >
              Home
            </Button>
          </AnchorLink>
          <AnchorLink route="#About">
            <Button style={`side-nav-btn ${page === "about" ? "page" : null} `}
              click={() => setPage("about")}
            >
              About
            </Button>
          </AnchorLink>
          <AnchorLink route="#Press">
            <Button style={`side-nav-btn ${page === "Press" ? "page" : null} `}
              click={() => setPage("Press")}
            >
              Press
            </Button>
          </AnchorLink>
          <AnchorLink route="#Book Signing">
            <Button
              style={`side-nav-btn ${page === "Book Signing" ? "page" : null} `}
              click={() => setPage("Book Signing")}
            >
              Book Signing
            </Button>
          </AnchorLink>
          <AnchorLink route="#Contact">
            <Button
              style={`side-nav-btn ${page === "contact" ? "page" : null} `}
              click={() => setPage("contact")}
            >
              Contact
            </Button>
          </AnchorLink>
        </div>
        <div className="w-32 h-full relative"></div>
        <div
          className="md:hidden flex w-6 h-6 bg-transparent flex-col justify-evenly items-center relative overflow-hidden cursor-pointer"
          onClick={() => setSideNav(!sideNav)}
        >
          <div
            className={`w-full h-1 rounded-full transition duration-500 bg-black ease-in-out ${
              sideNav ? "-rotate-45 translate-y-1" : null
            } `}
          />
          <div
            className={`w-full h-1 rounded-full bg-black transition duration-500 ease-in-out ${
              sideNav ? "rotate-45 -translate-y-1.5" : null
            } `}
          />
        </div>
      </nav>
      <AnimatePresence>
        {sideNav && (
          <motion.nav
            className="w-full h-full fixed top-16 left-0 z-20 bg-white/70 backdrop-blur-md flex flex-col gap-10 md:gap-5 justify-center items-center "
            initial={{
              opacity: 0,
              y: "-5%",
            }}
            animate={{
              opacity: 1,
              y: "0%",
            }}
            exit={{
              opacity: 0,
              y: "-5%",
            }}
            transition={{
              delayChildren: 0.5,
              default: {
                duration: 0.5,
              },
            }}
          >
            <AnchorLink route="/">
              <Button
                style={`side-nav-btn ${page === "home" ? "page" : null} `}
                click={() => handleNav("home")}
              >
                Home
              </Button>
            </AnchorLink>
            <AnchorLink route="#about">
              <Button
                style={`side-nav-btn ${page === "about" ? "page" : null} `}
                click={() => handleNav("about")}
              >
                About
              </Button>
            </AnchorLink>
            <AnchorLink route="#Press">
              <Button
                style={`side-nav-btn ${page === "Press" ? "page" : null} `}
                click={() => handleNav("Press")}
              >
                Press
              </Button>
            </AnchorLink>
            <AnchorLink route="#Book Signing">
              <Button
                style={`side-nav-btn ${
                  page === "Book Signing" ? "page" : null
                } `}
                click={() => handleNav("Book Signing")}
              >
                Book Signing
              </Button>
            </AnchorLink>
            <AnchorLink route="#Contact">
              <Button
                style={`side-nav-btn ${page === "contact" ? "page" : null} `}
                click={() => handleNav("contact")}
              >
                Contact
              </Button>
            </AnchorLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
