import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <nav className='nav'>
      <h3 className='nav_name'>
        <Link to='/'>GitHub Searcher</Link>
      </h3>
    </nav>
  );
};
