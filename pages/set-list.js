import React, { useEffect, useState } from 'react';
import Set from "../comps/Set";

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
  console.log(setList)

  return ( 
    <div>
      <h1>Set List</h1>
      <div>
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