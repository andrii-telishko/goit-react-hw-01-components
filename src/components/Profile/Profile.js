import React from "react";
// import PropTypes from "prop-types";
import styles from "./Profile.module.css"

const Profile = ({ user}) => (
    <div className={styles.profile_card}>
        <h2>Profile</h2>
  <div className={styles.card_information}>
    <img
      src={user.avatar}
                alt="user avatar"
                className={styles.avatar_img}
    />
    <p className={styles.user_name}>{user.name}</p>
    <p className={styles.user_information}>@{ user.tag }</p>
    <p className={styles.user_information}>{ user.location }</p>
  </div>

  <ul className={styles.stats_list}>
    <li className={styles.stats_item}>
      <span className={styles.stats_label}>Followers</span>
                <span className={styles.stats_quantity}>{ user.stats.followers }</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.stats_label}>Views</span>
                <span className={styles.stats_quantity}>{ user.stats.views }</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.stats_label}>Likes</span>
                <span className={styles.stats_quantity}>{ user.stats.likes }</span>
    </li>
  </ul>
</div>
)

export default Profile