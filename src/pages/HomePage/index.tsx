import { useState } from 'react';

export const HomePage = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className='container '>
      <h2 className='text-4xl text-center text-white mt-12'>React hooks</h2>
      <div className='mt-20 grid justify-center'>
        <h3>Use State</h3>
        <p className='text-2xl text-center'>Count: {count}</p>
        <div className='flex gap-4 mt-4'>
          <button
            onClick={handleMinus}
            className='bg-neutral-500 rounded-md px-6 py-2'
          >
            -1
          </button>
          <button
            onClick={handleAdd}
            className='bg-neutral-500 rounded-md px-6 py-2'
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};
