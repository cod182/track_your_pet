import React from 'react';

const InfoPane = () => {
  return (
    <div className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 gap-2 py-4 mx-auto w-full px-4">
      {/* InfoSquare */}
      <div
        className=" flex flex-col justify-center items-center mx-auto w-full h-full aspect-square bg-white rounded-xl "
        style={{ boxShadow: '0px 0px 20px 6px inset #929292' }}
      >
        <div className=""></div>
        <div className="w-fit mx-auto h-auto flex flex-col items-center justify-center px-6 text-[3vmin]">
          <p className="text-start w-full mx-auto">No Battery.</p>
          <p className="text-start w-full mx-auto">No Subscription.</p>
          <p className="text-start w-full mx-auto">No Stress.</p>
        </div>
      </div>
      {/* InfoSquare End */}

      {/* InfoSquare */}
      <div
        className=" flex flex-col justify-center items-center mx-auto w-full h-full aspect-square bg-white rounded-xl "
        style={{ boxShadow: '0px 0px 20px 6px inset #929292' }}
      >
        <div className=""></div>
        <div className="w-fit mx-auto h-auto flex flex-col items-center justify-center px-6 text-[3vmin]">
          <p className="text-start w-full mx-auto">No Battery.</p>
          <p className="text-start w-full mx-auto">No Subscription.</p>
          <p className="text-start w-full mx-auto">No Stress.</p>
        </div>
      </div>
      {/* InfoSquare End */}

      {/* InfoSquare */}
      <div
        className=" flex flex-col justify-center items-center mx-auto w-full h-full aspect-square bg-white rounded-xl "
        style={{ boxShadow: '0px 0px 20px 6px inset #929292' }}
      >
        <div className=""></div>
        <div className="w-fit mx-auto h-auto flex flex-col items-center justify-center px-6 text-[3vmin]">
          <p className="text-start w-full mx-auto">No Battery.</p>
          <p className="text-start w-full mx-auto">No Subscription.</p>
          <p className="text-start w-full mx-auto">No Stress.</p>
        </div>
      </div>
      {/* InfoSquare End */}
    </div>
  );
};

export default InfoPane;
