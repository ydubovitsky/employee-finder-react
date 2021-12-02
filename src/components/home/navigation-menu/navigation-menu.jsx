import { withRouter, Link } from 'react-router-dom';

import cn from 'classnames';
import styles from './navigation-menu.module.css';

const NavigationMenu = (props) => {

  return (
    <div className={cn(styles.container)} style={{ ...props.incomeStyle?.container }} >
      <div className={styles.nav} style={{ ...props.incomeStyle?.nav }}>
        <div className="">Registration</div>
        <div className=""><Link to="/home/sign-in">Sign In</Link></div>
        <div className="">Top Rated</div>
        <div className="">Contacts</div>
        <div className="">About</div>
      </div>
    </div>
  )
}

export default NavigationMenu;