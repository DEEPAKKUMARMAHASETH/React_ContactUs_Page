import logo from '/images/Frame21.png';
import styles from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
