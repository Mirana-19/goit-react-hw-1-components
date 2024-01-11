import { StatisticsItem } from './StatisticsItem/StatisticItem';
import s from './Statistics.module.css';

const addRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

export const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2>{title}</h2>}
      <ul className={s.list}>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            color={addRandomColor()}
          />
        ))}
      </ul>
    </section>
  );
};
