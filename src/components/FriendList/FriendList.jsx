import { FriendListItem } from './FriendListItem/FriendListItem';
import s from './FriendsList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};
