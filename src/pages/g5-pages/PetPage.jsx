import {ConversationIcon} from "../../assets/icons/g5-icons/export.jsx";
import PrimaryButton from "../../components/g5/PrimaryButton.jsx";
import Header from "../../components/g5/Header.jsx";


export default function PetPage() {
    return (
            <div className="container">
               <Header />
                <div className="content">
                    <h1>name</h1>
                    <div className="image-wrapper"></div>
                    <div className="petDescription"></div>
                    <PrimaryButton label="Converse com o doador" icon={<ConversationIcon/>} ref="/"/>
                </div>
            </div>
    )
}