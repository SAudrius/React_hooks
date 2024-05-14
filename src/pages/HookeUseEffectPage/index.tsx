import { useEffect, useState } from 'react';

export const HookUseEffectPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div className='container'>
      <div className='mt-20 grid justify-center'>
        <h2 className='text-4xl text-center text-white'>Use Effect</h2>
        <p className='text-2xl text-center'>Count: {count}</p>
      </div>
    </div>
  );
};
