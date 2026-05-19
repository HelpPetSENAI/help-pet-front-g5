import {PButton} from "./styles.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function PrimaryButton({label, icon, ownerId}) {
    const nav = useNavigate();

    const handleNavigate = async () => {
        try {
            const targetUrl = `...conversations/create/${ownerId}`;
            // essa seria o endpoint do g6, ∴ não vai funcionar
            await axios.post(targetUrl, ownerId);
            nav("/message");

        } catch (error) {
            console.error("Erro ao realizar o POST antes de navegar:", error);
            alert("Não foi possível processar a ação. Tente novamente.");
        }
    };

    return (
        <PButton onClick={handleNavigate}>
            {label}
            {icon}
        </PButton>
    );
}