import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css"

const Profile = ({ name, tag, location, avatar, stats: {followers,views, likes} }) => (
    <div className={styles.profile_card}>
        <h2>Profile</h2>
  <div className={styles.card_information}>
    <img
      src={avatar}
                alt="user avatar"
                className={styles.avatar_img}
    />
    <p className={styles.user_name}>{name}</p>
    <p className={styles.user_information}>@{ tag }</p>
    <p className={styles.user_information}>{ location }</p>
  </div>

  <ul className={styles.stats_list}>
    <li className={styles.stats_item}>
      <span className={styles.stats_label}>Followers</span>
                <span className={styles.stats_quantity}>{ followers }</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.stats_label}>Views</span>
                <span className={styles.stats_quantity}>{ views }</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.stats_label}>Likes</span>
                <span className={styles.stats_quantity}>{ likes }</span>
    </li>
  </ul>
</div>
)



Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
  stats: PropTypes.objectOf(
    PropTypes.number.isRequired
      
  )
}

export default Profile