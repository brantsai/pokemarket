import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import setDummyData from "../set-dummy-data";
import Image from "next/image";
import Set from "../comps/Set";

const SetList = () => {

  return ( 
    <div>
      <NavBar/>
      <h1>Set List</h1>
      <div>
        {setDummyData.data.map((setInfo) => 
          <Set
            setInfo={setInfo}
            key={setInfo.id}
          />
        )}
      </div>
      <Footer/>
    </div>
  );
}
 
export default SetList;