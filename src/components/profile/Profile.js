import ProfileItem from '../profileItem/ProfileItem';
import user from './user'

const Profile = () => {
  return (
    <div>
      <ProfileItem
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default Profile