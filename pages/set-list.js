import React, { useEffect, useState } from 'react';
import Set from "../comps/Set";
import styles from "../styles/set.module.css"

export async function getServerSideProps() {
  const res = await fetch('https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate');
  const data = await res.json();

  return {
    props: {
      setList: data
    }
  }
}

const SetList = ({ setList }) => {
  return ( 
    <div>
      <h2 className={styles.header}>Set List</h2>
      <div className={styles.mainContainer}>
        {setList.data.map((setInfo) => 
          <Set
            setInfo={setInfo}
            key={setInfo.id}
          />
        )}
      </div>
    </div>
  );
}
 
export default SetList;