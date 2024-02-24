import "./Bottom.css";
import ArrowButton from "../ArrowButton/ArrowButton";
import Details from "../Details/Details";

export default function Bottom(props: any) {
    return (
        <div className="Bottom">
            <div>
                <ArrowButton direction="up" />
                <ArrowButton direction="down" />
            </div>
            <Details />
        </div>
    );
}
