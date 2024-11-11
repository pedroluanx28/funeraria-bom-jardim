type CardProps = {
    icon: string;
    title: string;
    description: string;
    buttonText?: string;
};

export function Card({ icon, title, description, buttonText }: CardProps) {
    return (
        <div className="rounded px-3 py-4 d-flex flex-column align-items-center justify-content-between text-center card-shadow">
            <img src={icon} alt="ìcone do card" className="m-2 h-20" />

            <h5 className="fw-bold">{title}</h5>

            <p className="fs-09rem">{description}</p>

            {buttonText && (
                <button className="btn btn-bg-light-purple-text-light">
                    {buttonText}
                </button>
            )}
        </div>
    );
}
