import { list } from "postcss";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-purple-700 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl text-white font-bold ">/month</span>
      </h2>
      <h5 className="text-2xl my-6 font-bold text-center">{price.type}</h5>
      {/* //type 1 */}
      {/* <p>{price.benefits}</p> */}
      {/* //type 2 */}
      <p className="font-bold text-white underline">Benefits:</p>
      {price.benefits.map((benefit, idx) => (
        <Benefit key={idx} benefit={benefit}></Benefit>
      ))}
      <button className="w-full mt-auto bg-green-500 hover:bg-emerald-800 py-2 rounded-md text-white font-bold ">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
