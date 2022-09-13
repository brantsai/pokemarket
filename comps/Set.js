import Image from "next/image";
import styles from "../styles/set.module.css"

const Set = ({ setInfo }) => {
  return (
    <div className={styles.setContainer}>
      <Image 
        src={setInfo.images.logo}
        height={75}
        width={175}
      />
      {setInfo.name}
    </div>
  );
}
 
export default Set;