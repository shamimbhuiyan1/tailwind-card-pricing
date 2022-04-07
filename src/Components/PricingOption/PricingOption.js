import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefits/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 text-xl font-bold rounded">{name} </h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left ">Benefits: </h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="bg-green-500 text-white flex items-center rounded p-2 w-full justify-center mt-6 hover:text-green-700 font-bold">
        Buy Now <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
