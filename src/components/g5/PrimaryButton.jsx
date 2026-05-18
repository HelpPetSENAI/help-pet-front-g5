import {PButton} from "./styles.js";
import {Navigate, useNavigate} from "react-router-dom";


export default function PrimaryButton({label, icon}) {
    const nav = useNavigate();
    const navigate = () =>
        // post do thiago
        nav("/message");

    return (
        <PButton onClick={navigate}>
            {label}
            {icon}
        </PButton>
    )
}