import css from './FriendList.module.css';
import FriendListItem from 'components/friendListItem/FriendListItem'

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(item => {
          return (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          );
        })}
      </ul>
    </div>
  );
};




export default FriendList