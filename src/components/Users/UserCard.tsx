import styles from "../../styles/Users.module.scss";
import {
  nameStyle,
  userNameStyle,
  cityStyle,
} from "../constants/inlineStyle";

type User = {
  name: string;
  username: string;
  id: number;
  address: { city: string };
};

const UserCard = (user: User) => {
  return (
    <div>
      <div key={user.id} className={styles.userCard}>
        <p style={nameStyle}>{user.name}</p>
        <p style={userNameStyle}>@{user.username}</p>
        <p style={cityStyle}>{user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
