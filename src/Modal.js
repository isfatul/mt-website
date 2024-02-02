import React from "react";

export default function Modal({ data, isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center overflow-scroll pt-10">
      <div className="bg-white p-8 rounded-lg w-[80%] min-w-[300px]">
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold">{data?.title}</h2>
          <button onClick={onClose} className="text-2xl font-bold">&times;</button>
        </div>
        <p>{data?.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="aspect-w-16 aspect-h-9 object-cover lg:col-span-2"><img src={data?.teamImage} alt={""} className="h-[300px] w-full object-cover" /></div>
          <div className="aspect-w-1 aspect-h-1 min-h-[300px]">{data?.SAR}</div>
        </div>
      </div>
    </div>
  );
}
