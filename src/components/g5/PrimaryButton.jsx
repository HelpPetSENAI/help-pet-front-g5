import {PButton} from "./styles.js";


export default function PrimaryButton({label, ref, icon}) {
    return (
        <PButton href={ref} rel="noopener noreferrer">
            {label}
            {icon}
        </PButton>
    )
}