import "./PokeImage.css";

interface PokeImageProps {
  src: string;
  alt: string;
}

export default function PokeImage(props: PokeImageProps) {
    return (
      <div className="bg-white w-11/12 h-3/5 border-black border-4 rounded-xl  PokeImage"> 
        <img src={props.src} alt={props.alt} />
      </div>
    );
}