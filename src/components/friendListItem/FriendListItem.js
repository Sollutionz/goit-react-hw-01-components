import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <li className={css.item}>
        <span className={clsx(
          css.status,
          {
            [css.isOnline]: isOnline,
          })}>
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

export default FriendListItem;