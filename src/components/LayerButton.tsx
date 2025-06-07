import React from 'react';

interface LayerButtonProps {
  text: string;
  key?: string | number;
}

const LayerButton: React.FC<LayerButtonProps> = ({ text }) => {
  return (
    <div>
      <button
        type="button"
        className="border border-black text-black hover:bg-gray-100 hover:scale-105 hover:cursor-pointer hover:text-black focus:outline-none focus:bg-gray-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {text}
      </button>
    </div>
  );
};

export default LayerButton;
