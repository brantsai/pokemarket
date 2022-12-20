import { useContext } from "react";
import AppContext from "../../comps/AppContext";
import CardDetails from "../../comps/CardDetails";
import CardOverview from "../../comps/CardOverview";
import styles from '../../styles/card.module.css'

const Card = () => {
  const context = useContext(AppContext)

  return (
    <div className={styles.container}>
      <h1>
        #{context.currentCard.number} {context.currentCard.name}
      </h1>
      <div>{context.currentCard.rarity} | {context.currentCard.set.name}</div>
      <div className={styles.rowContainer}>
        <CardOverview 
          cardInfo={context.currentCard}
        />
        <CardDetails
          cardInfo={context.currentCard}
          />
      </div>
    </div>
  )
}

export default Card;