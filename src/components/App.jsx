import Profile from './profile/Profile.js'
import Statistics from './statistics/Statistics.js'
import '../index.css'
import FriendList from './friendList/FriendList.js';
import TransactionHistory from './transactionHistory/TransactionHistory.js';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics title="Upload stats" />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
