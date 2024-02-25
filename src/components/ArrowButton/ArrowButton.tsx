import "./ArrowButton.css";

interface ArrowButtonProps {
  onClick?: () => void;
  direction: string;
}

/**
 * A component that renders a button with an arrow that points
 * in the direction specified by the direction prop and calls
 * the function specified by the onClick prop.
 * 
 * @param {ArrowButtonProps} props 
 * @example
 * <ArrowButton direction="up" onClick={() => console.log('up')} />
 * 
 * @author Djmr5
 * 
 * @returns {JSX.Element} 
 */
export default function ArrowButton(props: ArrowButtonProps): JSX.Element {
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
