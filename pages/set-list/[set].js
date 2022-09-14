import Card from "../../comps/Card";
import styles from "../../styles/gallery.module.css"

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${context.query.id}`);
  const data = await res.json();

  return {
    props: {
      cardList: data
    }
  }
}

const CardList = ({ cardList }) => {
  return (  
    <div>
      <h2 className={styles.header}>{cardList.data[0].set.name} Card List</h2>
      <div className={styles.mainContainer}>
        {cardList.data.map((cardInfo) => 
          <Card 
            cardInfo={cardInfo}
            key={cardInfo.id}
          />
        )}
      </div>
    </div>

  );
}
 
export default CardList;