import s from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.image} width="150px" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li className={s.statsItem}>
          <span>Views:</span>
          <span>{views}</span>
        </li>
        <li className={s.statsItem}>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
