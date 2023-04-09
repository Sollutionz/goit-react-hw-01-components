import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  return (
    <div>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css['stat-list']}>
          {stats.map(item => {
            return (
              <li
                key={item.id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};

export default Statistics;