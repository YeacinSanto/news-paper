import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-200 join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-base-200 join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-200 join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
