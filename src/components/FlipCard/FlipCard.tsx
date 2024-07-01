import { FunctionComponent } from "react";
import "./flipCard.css";

type TProps = {
  name: string;
}

export const FlipCard: FunctionComponent<TProps> = ({ name }) => {
  return (
    <div className="cardFlip">
      <div className="cardInner">
        <div className="cardBack">
          <h2>{ name }</h2>
        </div>
      </div>
    </div>
  )
}
