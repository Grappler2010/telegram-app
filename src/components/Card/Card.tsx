import { FunctionComponent } from "react"
import "./card.css"
import { useSteps } from "react-step-builder";

type TProps = {
  role: string;
}

export const Card: FunctionComponent<TProps> = ({ role }) => {
  const { next } = useSteps();

  const handleClick = () => {
    next();
  }

  return (
    <div className="card">
      <h4>{ role }</h4>
      <button onClick={handleClick}>Узнать подробней</button>
    </div>
  )
}
