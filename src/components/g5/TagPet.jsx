import {Tagspecies} from "./styles.js";

export default function TagPet({ text, species}) {
    return (
        <Tagspecies variant={species}>
            <p>{text}</p>
        </Tagspecies>
    )
}