import { Type } from "../../models/Pokemon";
import "./Details.css";

interface DetailsProps {
    id: number;
    name: string;
    types: Type[];
}

export default function Details(props: DetailsProps) {
    return (
      <div id="Details">
        <div id="Name">{props.name}</div>
        <div id="ID">
          <ul>
            <li>{props.id}</li>
            <li>
              {props.types.map((type, index) => (
                <span key={index}>{type.type.name} </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
}
