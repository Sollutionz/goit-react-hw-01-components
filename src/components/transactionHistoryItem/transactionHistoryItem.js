import css from './transactionHistoryItem.module.css'
import PropTypes from 'prop-types';
const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={css.tr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};
TransactionHistoryItem.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number,
};
export default TransactionHistoryItem;