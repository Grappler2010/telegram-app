import { FunctionComponent } from "react"
import "./card.css"

type TProps = {
  name: string
  role: string
  description: string
}

export const Card: FunctionComponent<TProps> = ({ name, role, description }) => {
  return (
    <div className="card">
      <h3>{ name }</h3>
      <h4>{ role }</h4>
      <p>{ description }</p>
    </div>
  )
}
