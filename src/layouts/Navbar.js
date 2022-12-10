import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import WholeScreenPopup from "components/WholeScreenPopup";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => document.removeEventListener("scroll", handler);
  });

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [showPopup]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-16 lg:h-6vw flex items-center z-50 transition-all duration-300 ${
          isScrolled ? "bg-body-bg" : ""
        }`}
      >
        <div className="container-wrapper flex items-center justify-between">
          <div className="flex items-center space-x-6 lg:space-x-2vw">
            <button
              className="text-xl lg:text-[1.8vw] text-white"
              onClick={() => setShowPopup((val) => !val)}
            >
              <FiMenu />
            </button>
            <Link to="/">
              <h4 className="fs-20px font-bold">collective_100</h4>
            </Link>
          </div>

          <button
            className="flex lg:hidden text-xl"
            onClick={() => setIsSidebarOpen((val) => !val)}
          >
            <FiMenu />
          </button>

          <div
            ref={sidebarRef}
            className={`flex flex-col lg:flex-row lg:items-center lg:space-x-4vw fixed lg:static top-0 right-0 w-[240px] sm:w-[300px] lg:w-auto h-screen lg:h-auto border-l-2 lg:border-l-0 p-10 lg:p-0 transition-all duration-300 bg-body-bg z-[120] lg:bg-transparent ${
              isSidebarOpen
                ? "translate-x-0"
                : "translate-x-[240px] sm:translate-x-[300px] lg:translate-x-0"
            }`}
          >
            <button
              className="flex text-2xl lg:hidden mb-6 w-fit"
              onClick={() => setIsSidebarOpen(false)}
            >
              <MdClose />
            </button>

            <a href="/" className="block fs-16px font-normal mb-5 lg:mb-0">
              Private Offices
            </a>
            <ScrollLink
              to="Memberships"
              offset={-140}
              onClick={() => setIsSidebarOpen(false)}
              className="block fs-16px font-normal mb-5 lg:mb-0 cursor-pointer"
            >
              Memberships
            </ScrollLink>
            <a href="/" className="block fs-16px font-normal mb-5 lg:mb-0">
              Contact
            </a>
            <a href="/" className="block fs-16px font-normal mb-8 lg:mb-0">
              Account
            </a>
            <Button title="Enquire" />
          </div>
        </div>

        <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>
      </nav>

      {showPopup && (
        <WholeScreenPopup state={showPopup} stateSetter={setShowPopup} />
      )}
    </>
  );
}

export default Navbar;
