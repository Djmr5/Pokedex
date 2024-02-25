import "./Bottom.css";
import ArrowButton from "../ArrowButton/ArrowButton";
import Details from "../Details/Details";

export default function Bottom(props: any) {

    const handleArrowClick = (direction: string) => {
        console.log(direction);
    }

    return (
        <div className="Bottom">
            <div className="Arrows">
                <ArrowButton direction="up" onClick={() => handleArrowClick('up')} />
                <ArrowButton direction="down" onClick={() => handleArrowClick('down')} />
            </div>
            <Details />
        </div>
    );
}
