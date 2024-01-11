import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.trow}>
          <th className={s.data}>Type</th>
          <th className={s.data}>Amount</th>
          <th className={s.data}>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, currency, amount, type }) => (
        <tbody key={id} className={s.tbody}>
          <tr className={s.trow}>
            <td className={s.data}>{type}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
