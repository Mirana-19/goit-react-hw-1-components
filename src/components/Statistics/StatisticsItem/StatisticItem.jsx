import s from './StatisticsItem.module.css';

export const StatisticsItem = ({ id, label, percentage, color }) => {
  return (
    <li className={s.item} key={id} style={{ backgroundColor: color }}>
      <span>{label}</span>
      <span>{percentage}</span>
    </li>
  );
};
