import AppContext from "../../comps/AppContext";
import CardIcon from "../../comps/CardIcon";
import styles from "../../styles/gallery.module.css"
import { useState, useContext } from "react";
import Link from "next/link";

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
          <Link
            href={{
              pathname: '/cards/' + cardInfo.id,
              query: {id : cardInfo.id}
            }}
            key={cardInfo.id}
          >
            <div>
              <CardIcon 
                cardInfo={cardInfo}
              />
            </div>          
          </Link>
        )}
      </div>
    </div>

  );
}
 
export default CardList;