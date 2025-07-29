import React from 'react'
import styles from "./header.module.css"
import logo from "../../assets/Home/logo.png"
import menuIcon from "../../assets/Home/menu.png"
import search from "../../assets/Home/search.png"
import voiceSearch from "../../assets/Home/mic.png"
import create from "../../assets/Home/create.png"
import notification from "../../assets/Home/notification.png"

const Header = ({ isMenuOpen, setIsMenuOpen }) => {

    function menuFunc() {
        if(isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }
    

    return (
        <div className={styles.header}>
            <div className={styles.left_side}>
                <img src={menuIcon} alt="" onClick={menuFunc} />
                <img src={logo} alt="" />
            </div>

            <form>
                <div className={styles.search_panel}>
                    <input type="text" placeholder='Search' className={styles.search_input} />
                    <button type='submit' className={styles.search}>
                        <img src={search} alt="" />
                    </button>
                </div>

                <div className={styles.mic}>
                    <img src={voiceSearch} alt="" />
                </div>
            </form>

            <div className={styles.right_side}>
                <img src={create} alt="" />
                <img src={notification} alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className={styles.profile} />
            </div>
        </div>
    )
}

export default Header