
import React from "react";

function DailySpecialCard({ item }) {
  const { title, price, image, day, color } = item;

  const isGreen = color === "#42A672";

 


  return (
    <div
      className="rounded-xl overflow-hidden p-4 text-center shadow-lg bg-gray-300"
      style={{ backgroundColor: color, color: isGreen ? "#ffffff" : "#000000" }}
    >
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-4 h-36">
        <p className="uppercase text-sm tracking-widest mb-2" style={{color: isGreen ? "#eee" : "#666"}}>{day}</p>
        <h3 className="text-xl font-bold leading-tight mb-1" style={{fontFamily: "Expend Bold"}}>
            {title}
        </h3>
        <p className="text-lg font-semibold mb-4" style={{fontFamily:"Gotham Medium"}}>${price}</p>
      </div>
      <div>
      <button className="bg-yellow-400 text-black py-2 px-4 rounded-full font-semibold hover:bg-yellow-300 transition">
          Explore Menu
        </button>
      </div>
    </div>
  );
}

export default DailySpecialCard;
