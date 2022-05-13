import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Users.module.scss";

type User = {
  name: string;
  username: string;
  id: number;
  company: {
    name: string;
    catchphrase: string;
  };
  address: { city: string };
};

const UserCard = (user: User) => {
  return (
    <div>
      <Link href={`/user/${user.id}`} key={user.id} passHref>
        <div className={styles.userCard}>
          <div className={styles.nameContainer}>
            <span className={styles.name}>{user.name}</span>
            <span>@{user.username}</span>            
          </div>
          <div className={styles.companyInfoContainer}>
            <Image 
              src="/company.svg" 
              alt="company icon" 
              width={20} height={20}
            />
            <span className={styles.companyName}>{user.company.name}</span>
          </div>
          <div className={styles.companyInfoContainer}>
            <Image 
              src="/location.svg" 
              alt="company icon" 
              width={20} height={20}
            />
            <span className={styles.companyName}>{user.address.city}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
