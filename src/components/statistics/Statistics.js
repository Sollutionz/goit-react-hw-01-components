import css from './Statistics.module.css';
import data from './data.json';
import StatisticsItem from '../statisticsItem/StatisticsItem.js'

const Statistics = ({title}) => {
  return (
    <div>
      <section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2>:<></>}
        <ul className={css['stat-list']}>
          {data.map((item) => {
            return <StatisticsItem key={item.id} stats={item} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;