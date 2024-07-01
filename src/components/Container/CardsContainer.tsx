import { techJobRolesData } from "../../data";
import { Card } from "components";
import "./container.css";

export const CardsContainer = () => {
  return (
    <div className="cardsContainer">
      {techJobRolesData.map((card) => (
        <Card key={card.role}
          role={card.role}
        />
      ))}
    </div>
  )
}