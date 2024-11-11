type BenefitCardProps = {
    title: string;
    description: string;
    icon: string;
};

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
    return (
        <div className="d-flex align-items-center gap-3">
            <img
                src={icon}
                alt="Ícone do cartão de benefício"
                className="w-4rem"
            />

            <div className="text-start d-flex flex-column gap-1">
                <h6 className="m-0 fw-bold">{title}</h6>
                <p className="m-0 fs-1rem">{description}</p>
            </div>
        </div>
    );
}
