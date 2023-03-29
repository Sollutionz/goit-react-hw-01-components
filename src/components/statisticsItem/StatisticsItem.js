import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';

const StatisticsItem = ({stats}) => {
    return (
        <li className={css.item} style={{ backgroundColor:  getRandomHexColor() }}>
        <span className={css.label}>{stats.label}</span>
        <span className={css.percentage}>{stats.percentage}%</span>
      </li> 
    );
}

StatisticsItem.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.object.isRequired
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default StatisticsItem; 