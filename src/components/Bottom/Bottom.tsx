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
                <ArrowButton onClick={() => handleArrowClick('up')} />
                <ArrowButton onClick={() => handleArrowClick('down')} direction="down" />
            </div>
            <Details />
        </div>
    );
}
