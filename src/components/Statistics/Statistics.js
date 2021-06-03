import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css"

const Statistics = ({ title, stats }) => (
    <div className={styles.statistic_section}>
        <h2>Statistics</h2>
        {title && (<h3 className={styles.section_title}>{title}</h3>)}
        <ul className={styles.statistic_list}>
            {stats.map(({ id, label, percentage }) => (
                <li key={id} className={styles.list_item}
                    style={{ backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16) }}>
                    <span className={styles.item_label}>{label}</span>
                    <span className={styles.item_quantity}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </div>
);

Statistics.defaultProps = {
    title: ''
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
};

export default Statistics