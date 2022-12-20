import styles from '../styles/card.module.css'

const CardDetails = ({ cardInfo }) => {
  return (
    <div className={styles.columnContainer}>
      <h2><a href={cardInfo.tcgplayer.url}>TCGplayer Price</a></h2>
      <div>Average price: ${cardInfo.tcgplayer.prices.holofoil ? cardInfo.tcgplayer.prices.holofoil.market : cardInfo.tcgplayer.prices.normal.market}</div>
      <div>High price: ${cardInfo.tcgplayer.prices.holofoil ? cardInfo.tcgplayer.prices.holofoil.high : cardInfo.tcgplayer.prices.normal.high}</div>
      <div>Low price: ${cardInfo.tcgplayer.prices.holofoil ? cardInfo.tcgplayer.prices.holofoil.low : cardInfo.tcgplayer.prices.normal.low}</div>
      <button>Add to Collection</button>
      <button>Add to Wishlist</button>
      <button>Sell this Card</button>
    </div>
  )
}

export default CardDetails;