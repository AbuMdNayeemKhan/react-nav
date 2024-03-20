import { FaRegDotCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <div className="flex">
            <li className="flex items-center gap-3"><FaRegDotCircle /> {feature}</li>
        </div>
    );
};

export default Feature;