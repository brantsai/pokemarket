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

  return ( 
    <div>
      <h2>Set List</h2>
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