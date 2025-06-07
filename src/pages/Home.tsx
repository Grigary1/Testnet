// src/pages/Home.tsx
import type { FC } from 'react';
import LayerButton from '../components/LayerButton';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';

const Home: FC = () => {
  const layers: string[] = ['All', 'Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5'];
  const data = [
    { task: 5, progress: 80 },
    { task: 5, progress: 20 },
    { task: 5, progress: 60 },
    { task: 5, progress: 90 },
    { task: 5, progress: 100 },
    { task: 5, progress: 50 },
    { task: 5, progress: 30 },
    { task: 5, progress: 25 },
    { task: 5, progress: 80 },
    { task: 5, progress: 95 },
    { task: 5, progress: 88 },
    { task: 5, progress: 100 },
    { task: 5, progress: 80 },
    { task: 5, progress: 20 },
    { task: 5, progress: 60 },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 min-h-screen px-4 py-8">
      <div className="w-full max-w-[80%] bg-white shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Title */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">Daily Grindings</h1>
            <p className="mt-2 text-base sm:text-lg text-gray-800">
              Track your testnet progress and keep grinding every day!
            </p>
          </div>
          {/* Buttons */}
          <div className="flex flex-col space-y-2 sm:space-y-4">
            <button className="px-4 py-2 border-2 border-gray-800 rounded-md hover:bg-gray-100 font-semibold">
              ADD YOUR GRIND
            </button>
            <button className="px-4 py-2 border-2 border-gray-800 rounded-md hover:bg-gray-100 font-semibold">
              CHECK-IN
            </button>
          </div>
        </div>

        {/* Layers & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            {layers.map((layer, idx) => (
              <LayerButton text={layer} key={idx} />
            ))}
          </div>
          <div className="w-full md:w-auto">
            <SearchBar />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <Cards key={idx} tasksCount={item.task} progress={item.progress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
