import { useContext } from "react";
import AppContext from "../../comps/AppContext";
import CardOverview from "../../comps/CardOverview";

const Card = () => {
  const context = useContext(AppContext)

  return (
    <div>
      <CardOverview cardInfo={context.currentCard}/>
    </div>
  )
}

export default Card;