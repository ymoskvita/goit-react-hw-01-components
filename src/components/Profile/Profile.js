import PropTypes from 'prop-types';

const Profile = ({ avatar, username, tag, location, followers, views, likes }) => {
  return (
    <section>
      <div>
        <img
          src={avatar}
          alt="User avatar"
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </section>);
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stat: PropTypes.objectOf(PropTypes.number)
}

export default Profile;