import React, { useEffect, useState } from 'react';
import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import setDummyData from "../set-dummy-data";
import Set from "../comps/Set";
import axios from 'axios';

const SetList = () => {
  const [currentSetList, setCurrentSetList] = useState([]);

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate')
      .then((response) => {
        console.log(response.data);
      })
  }, [])

  return ( 
    <div>
      <h1>Set List</h1>
      <div>
        {setDummyData.data.map((setInfo) => 
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