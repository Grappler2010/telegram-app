import { FunctionComponent } from "react"
import "./card.css"

type TProps = {
  role: string;
}

export const Card: FunctionComponent<TProps> = ({ role }) => {
  return (
    <div className="card">
      <h4>{ role }</h4>
      <button>Узнать подробней</button>
    </div>
  )
}
