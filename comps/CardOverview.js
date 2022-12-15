import styles from "../styles/card.module.css"
import Image from "next/image";
import { useRouter } from "next/router";

const CardOverview = ({ cardInfo }) => {
  const router = useRouter();

  return (
    <div>
      <h1>#{cardInfo.number} {cardInfo.name}</h1>
      <div>{cardInfo.rarity}</div>
      <div className={styles.cardImage}>
        <Image
          src={cardInfo.images.large}
          width={280}
          height={390}
        >
        </Image>
      </div>
      <button onClick={() => router.back()}>Return to Card Gallery</button>
    </div>
  )
}

export default CardOverview;