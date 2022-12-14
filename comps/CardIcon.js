import styles from '../styles/set.module.css';
import Image from 'next/image';

const CardIcon = ({ cardInfo }) => {
  return ( 
    <div className={styles.setContainer}>
      <div className={styles.setImage}>
        <Image 
          src={cardInfo.images.small}
          height={250}
          width={200}
        />
      </div>
      #{cardInfo.number + ' '}
      {cardInfo.name}
    </div> 
  );
}
 
export default CardIcon;