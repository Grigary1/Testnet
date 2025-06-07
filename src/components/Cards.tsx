
import type { FC } from 'react';

interface ProgressCardProps {

  tasksCount: number;

  progress: number;

  title?: string;
}

const Cards: FC<ProgressCardProps> = ({
  title = 'LayerEdge',
  tasksCount,
  progress,
}) => {
  const normalizedProgress = Math.max(0, Math.min(progress, 100));
  const isComplete = normalizedProgress === 100;

  return (
    <div
      className="relative w-full bg-white border-2 border-black rounded-md shadow p-4 pr-12
        transform transition-transform duration-300 ease-in-out hover:scale-105
        flex flex-col justify-between overflow-hidden h-36"
    >
      {/* Completed Sidebar */}
      {isComplete && (
        <div
          className="absolute top-0 right-0 h-full w-8 bg-green-500 rounded-tr-md rounded-br-md flex items-center justify-center"
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
        >
          <span className="text-[10px] font-bold text-white">COMPLETED</span>
        </div>
      )}

      {/* Header: Icon and Title */}
      <div className="flex items-center space-x-3 mb-2 min-w-0">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
          <span className="text-lg sm:text-xl font-bold text-gray-700">E</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">{title}</p>
          <p className="text-xs sm:text-sm text-black">{tasksCount} Tasks</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 bg-black"
            style={{ width: `${normalizedProgress}%` }}
          />
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
          {normalizedProgress}%
        </span>
      </div>
    </div>
  );
};

export default Cards;
