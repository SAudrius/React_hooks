import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='py-4 bg-orange-200-00'>
      <div className='container mx-auto'>
        <nav>
          <Link className='text-xl' to='/'>
            Hooks
          </Link>
          <ul className='flex gap-4'>
            <li className='gap-4 text-xl text-white font-bold '></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
