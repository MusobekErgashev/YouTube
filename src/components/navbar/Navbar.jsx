import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <li className={styles.navbar_list}>All</li>
        <li className={styles.navbar_list}>Gaming</li>
        <li className={styles.navbar_list}>Football</li>
        <li className={styles.navbar_list}>Apple</li>
        <li className={styles.navbar_list}>Music</li>
        <li className={styles.navbar_list}>Mixes</li>
        <li className={styles.navbar_list}>Live</li>
        <li className={styles.navbar_list}>Editing</li>
        <li className={styles.navbar_list}>Coding</li>
        <li className={styles.navbar_list}>Real Madrid</li>
        <li className={styles.navbar_list}>Technology</li>
        <li className={styles.navbar_list}>News</li>
      </ul>
    </div>
  )
}

export default Navbar