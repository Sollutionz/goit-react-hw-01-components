import Profile from './profile/Profile.js'
import user from './data/user';
import data from './data/data.json';
import friends from './data/friends';
import transaction from './data/transactions';
import Statistics from './statistics/Statistics.js'
import '../index.css'
import FriendList from './friendList/FriendList.js';
import TransactionHistory from './transactionHistory/TransactionHistory.js';

export const App = () => {
  return (
    <div>
      <Profile
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transaction} />;
    </div>
  );
};
