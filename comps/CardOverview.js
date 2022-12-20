import styles from "../styles/card.module.css"
import Image from "next/image";
import { useRouter } from "next/router";

const CardOverview = ({ cardInfo }) => {
  const router = useRouter();

  return (
    <div className={styles.columnContainer}>
      <div className={styles.cardImage}>
        <Image
          src={cardInfo.images.large}
          width={250}
          height={348}
        >
        </Image>
      </div>
      <button onClick={() => router.back()}>Return to Card Gallery</button>
    </div>
  )
}

export default CardOverview;