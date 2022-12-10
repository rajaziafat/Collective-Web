import { Link } from "react-router-dom";
import Button from "./Button";
import { IoClose } from "react-icons/io5";

function WholeScreenPopup({ state, stateSetter }) {
  const close = () => {
    stateSetter(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-body-bg z-[1000]">
      <div className="container-wrapper z-50 h-full py-4 lg:py-1_6vw grid grid-rows-[auto_1fr_auto]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 lg:space-x-3vw">
            <button
              className="text-2xl lg:text-[2vw] text-white"
              onClick={close}
            >
              <IoClose color="white" />
            </button>
            <Link to="/" onClick={close}>
              <h4 className="fs-20px font-bold">collective_100</h4>
            </Link>
          </div>

          <Button title="Enquire" />
        </div>

        <div className="grid grid-cols-[1fr_auto] lg:grid-cols-2 max-w-[22rem] mx-auto lg:mx-0 lg:max-w-none  w-full lg:w-1/2 content-center gap-y-8 lg:gap-y-3vw">
          <div>
            <h1 className="fs-20px text-blue mb-5 lg:mb-1_6vw lh-1">
              Memberships
            </h1>

            <div className="space-y-2 lg:space-y-1_2vw">
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Private offices
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Dedicated desk
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Shared desk
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Virtual office
              </Link>
            </div>
          </div>
          <div>
            <h1 className="fs-20px text-blue mb-5 lg:mb-1_6vw lh-1">About</h1>

            <div className="space-y-2 lg:space-y-1_2vw">
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                About collective_100
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Our impact
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Location
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                News
              </Link>
            </div>
          </div>
          <div>
            <h1 className="fs-20px text-blue mb-5 lg:mb-1_6vw lh-1">
              Ammenities
            </h1>

            <div className="space-y-2 lg:space-y-1_2vw">
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Meeting rooms
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Launch event space
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Meeting room bundles
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Ammenities overview
              </Link>
            </div>
          </div>
          <div>
            <h1 className="fs-20px text-blue mb-5 lg:mb-1_6vw lh-1">Contact</h1>

            <div className="space-y-2 lg:space-y-1_2vw">
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Contact us
              </Link>
              <Link
                to="/"
                onClick={close}
                className="block w-fit fs-16px text-white font-light"
              >
                Request a tour
              </Link>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center lg:text-left fs-16px font-light mb-1 lg:mb-0_6vw">
            100 Cubitt St, Cremorne
          </p>
          <p className="text-center lg:text-left fs-16px font-light">
            info@collective100.com.au
          </p>
        </div>
      </div>

      <img
        src="images/grid-img-2.png"
        className="absolute top-0 right-0 w-full opacity-10 lg:opacity-100 lg:w-1/2 h-full object-cover -z-10"
        alt=""
      />
    </div>
  );
}

export default WholeScreenPopup;
