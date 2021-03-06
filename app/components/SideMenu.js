import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../actions/index';
import routes from '../constants/routes.json';
import styles from './styles/SideMenu.css';
import { ToastContainer } from 'react-toastify';

const SideMenu = () => (

    <div className={styles.menu_div}>
      <button className={styles.menu_btn} ><Link to={routes.HOME}><i className={styles.menu_btn,"fa fa-home fa-3x"}/></Link></button>
      <button className={styles.menu_btn} ><Link to={routes.SCHOOL}><i className={styles.menu_btn,"fa fa-school fa-3x"}/></Link></button>
      <button className={styles.menu_btn} ><i className= "fa fa-users fa-3x"/></button>
      <button className={styles.menu_btn} ><i className="fa fa-eraser fa-3x"/></button>
      <button className={styles.menu_btn} ><i className="fa fa-list-ol fa-3x"/></button>
      <ToastContainer />
    </div>
  );

export default SideMenu;
