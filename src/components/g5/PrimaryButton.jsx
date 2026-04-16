

export default function PrimaryButton({label, ref, icon}) {
    return (
        <a href={ref} rel="noopener noreferrer">
            {label}
            {icon}
        </a>
    )
}