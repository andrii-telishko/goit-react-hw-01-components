import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionsHistory.module.css"

const TransactionsHistory = ({ transactions }) =>  (
    <div className={styles.table_conteiner}>
        <h2 >Transactions History</h2>
        <table className={styles.table}>
            <thead className={styles.table_head}>
                <tr>
                    <th >Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={styles.table_item}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    

);
    
TransactionsHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.string.isRequired
        )
    )
};

export default TransactionsHistory