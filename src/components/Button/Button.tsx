import './button.css';

interface ButtonProps{
    onClick:()=>void;
    color:string|'red'|'blue'|'green'|'yellow';
    label:string;
}

export default function Button(props:ButtonProps){
    return (
        <button onClick={props.onClick}
            className={`btn ${props.color==='red'?'red':''} ${props.color==='green'?'green':''} ${props.color==='yellow'?'yellow':''} ${props.color==='blue'?'blue':''}` }
            >
            {props.label}
        </button>
    )
}