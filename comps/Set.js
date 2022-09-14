import Image from "next/image";
import styles from "../styles/set.module.css";

const Set = ({ setInfo }) => {
  return (
    <div className={styles.setContainer}>
      <div className={styles.setImage}>
        <Image 
          src={setInfo.images.logo}
          height={75}
          width={175}
        />
      </div>
      {setInfo.name}
    </div>
  );
}
 
export default Set;