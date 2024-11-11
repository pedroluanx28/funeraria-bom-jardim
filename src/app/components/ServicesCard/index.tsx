type ServicesCardProps = {
    title: string;
    description: string;
    icon: string;
};

export function ServicesCard({ title, description, icon }: ServicesCardProps) {
    return (
        <div className="card-shadow p-3 d-flex flex-column gap-2 rounded bg-white text-center">
            <img src={icon} alt="Ícone do card de serviços" className="w-100" />

            <h6 className="m-0">{title}</h6>

            <p className="m-0">{description}</p>

            <button className="btn btn-bg-light-purple-text-light">
                Saiba mais
            </button>
        </div>
    );
}
