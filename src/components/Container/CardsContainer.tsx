import { ekaiData } from "../../data";
import { Card } from "components";
import "./container.css";

export const CardsContainer = () => {
  return (
    <div className="cardsContainer">
      {ekaiData.map((card) => (
        <Card key={card.name}
          name={card.name}
          role={card.role}
          description={card.description}
        />
      ))}
    </div>
  )
}