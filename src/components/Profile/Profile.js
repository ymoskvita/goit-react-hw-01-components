import PropTypes from 'prop-types';
import { Section, Wrapper, StatsList, StatsItem, Avatar, Username, Tag, Label, Quantity } from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Section>
      <Wrapper>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Wrapper>
      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Section>);
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stat: PropTypes.objectOf(PropTypes.number)
}

export default Profile;