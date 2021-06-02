import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendsList.module.css"
import defaultAvatar from "./defaultAvatar.jpg"

const FriendsList = ({  friends }) => (
    <div className={styles.friend_section}>
        <h2>FriendsList</h2>
        <ul className={styles.friend_list}>
            {friends.map(({ avatar , name, isOnline, id }) => {


                const classStatus = isOnline ? styles.friend_status_online : styles.friend_status_offline;
                return (
                    <li key={id} className={styles.friend_item}>
                        <span className={classStatus}></span>
                        <img src={avatar} alt="user avatar" className={styles.friend_avatar} />
                        <p className={styles.friend_name}>{name}</p>
                    </li>
                )
            })
            }
            
        
        
        </ul>
    </div>
    
);

FriendsList.defaultProps = {
    avatar: "https://obrmos.ru/do/do_hud/Art/img/chern-kv.png"
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
        }

        )
    )
    
}



export default FriendsList