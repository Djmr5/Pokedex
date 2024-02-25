import "./ArrowButton.css";

interface ArrowButtonProps {
  onClick?: () => void;
  direction: string;
}

export default function ArrowButton(props: ArrowButtonProps) {
  return (
    <button onClick={props.onClick} className="ArrowButton">
      <div
        className={
          `Arrow 
          ${props.direction === 'right' ? 'right-arrow' : ''}
          ${props.direction === 'left' ? 'left-arrow' : ''}
          ${props.direction === 'down' ? 'down-arrow' : ''}
        `}
      />
    </button>
  );
}