import { FlipCard } from "components";
import "./container.css";
import { useSteps } from "react-step-builder";

export const FlipCardsContainer = () => {
  const { prev } = useSteps();

  const handleClick = () => {
    prev();
  }

  return (
    <div className="flipCardsContainer">
      <FlipCard name="Изанаги" />
      <FlipCard name="Изанами" />
      <FlipCard name="Аматэрасу" />
      <FlipCard name="Сусано" />
      <button onClick={handleClick}>Назад</button>
    </div>
  )
}
