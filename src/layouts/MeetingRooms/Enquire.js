import Button from "components/Button";
import React from "react";

const InputWithLabel = ({
  label,
  type = "text",
  id,
  options,
  placeholder,
  input = false,
  textarea = false,
  selectBox = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="fs-16px font-light text-white mb-1 lg:mb-0_2vw w-fit block cursor-pointer"
      >
        {label}
      </label>
      {textarea && (
        <textarea
          placeholder={placeholder}
          className="w-full py-2 lg:py-1vw h-16 lg:h-8vw border-b-1pxToVw border-white outline-none resize-none block text-white bg-transparent"
          id={id}
        ></textarea>
      )}

      {input && (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full py-2 lg:py-1vw border-b-1pxToVw border-white outline-none resize-none block text-white bg-transparent"
        />
      )}

      {selectBox && (
        <select
          id={id}
          className="w-full py-2 lg:py-1vw border-b-1pxToVw border-white outline-none resize-none block text-white bg-transparent"
        >
          {options &&
            options.map((item, index) => (
              <option
                key={index}
                value={item.title}
                className="text-white bg-black"
              >
                {item.title}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

function Enquire() {
  return (
    <div>
      <div className="container-wrapper">
        <h1 className="fs-80px font-bold text-white pb-5 lg:pb-2vw mb-4 lg:mb-2vw uppercase border-b-1pxToVw">
          Enquire
        </h1>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-start sm:items-center justify-between mb-12 lg:mb-50px">
          <div>
            <p
              className="fs-30px text-white font-light"
              style={{ lineHeight: 1.4 }}
            >
              info@collective100.com.au <br />
              +61 3 9114 2220
            </p>
          </div>
          <div>
            <p
              className="fs-30px text-white font-light text-left sm:text-right"
              style={{ lineHeight: 1.4 }}
            >
              Level 2, 100 Cubitt St,
              <br /> Cremorne, Victoria, Australia.
            </p>
          </div>
        </div>

        <form>
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-y-8 lg:gap-y-3vw sm:gap-x-10 lg:gap-x-6vw mb-10 sm:mb-12 lg:mb-4vw">
            <div className="col-span-2">
              <InputWithLabel
                id="req"
                label="Requirements *"
                placeholder="type your requirements"
                textarea={true}
              />
            </div>
            <InputWithLabel
              input={true}
              id="name"
              label="Full name *"
              placeholder="type your full name"
            />
            <InputWithLabel
              input={true}
              id="email"
              label="Email *"
              placeholder="type your email"
            />
            <InputWithLabel
              input={true}
              id="number"
              label="Phone number *"
              placeholder="type your number"
            />
            <InputWithLabel
              id="looking-for"
              label="I am looking for *"
              placeholder="type your number"
              selectBox={true}
              options={[
                { title: "Private office" },
                { title: "Public office" },
              ]}
            />
          </div>
          <Button title="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Enquire;
