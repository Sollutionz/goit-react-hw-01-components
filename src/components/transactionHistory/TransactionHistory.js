import css from './TransactionHistory.module.css';
import transaction from './transactions.json';
import TransactionHistoryItem from 'components/transactionHistoryItem/transactionHistoryItem';


const TransactionHistory = () => {
    return (
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr className={css.tr}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
     
        <tbody>
          {transaction.map(item => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
        </tbody>
      </table>
    );
}


export default TransactionHistory;