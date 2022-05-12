import {
  nameStyle,
  userNameStyle,
  cityStyle,
} from "../constants/inlineStyle";
import styles from "../../../styles/Users.module.scss";
import Link from "next/link";

type User = {
  name: string;
  username: string;
  id: number;
  address: { city: string };
};

const UserCard = (user: User) => {
  return (
    <div>
      <Link href={`/user/${user.id}`} key={user.id} passHref>
      <div className={styles.userCard}>
        <p style={nameStyle}>{user.name}</p>
        <p style={userNameStyle}>@{user.username}</p>
        <p style={cityStyle}>{user.address.city}</p>
      </div>
      </Link>
    </div>
  );
};

export default UserCard;
