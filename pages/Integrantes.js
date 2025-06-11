function Integrantes() {
    try {
        const members = [
            { 
                name: "Pereira Gerónimo", 
                role: "Técnico", 
                position: "Empleado",
                description: "Especialista en soporte técnico y reparaciones"
            },
            { 
                name: "Pereira Mia", 
                role: "Community Manager", 
                position: "Dueña de la Empresa",
                description: "Gestión de redes sociales y marketing digital"
            },
            { 
                name: "Reyes Ciro Atuel", 
                role: "Instructor de Informática", 
                position: "Dueño de la Empresa",
                description: "Capacitación y formación en tecnología"
            }
        ];

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="integrantes" data-file="pages/Integrantes.js" className="fade-in">
                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Nuestro Equipo</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-scale text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i data-lucide="user" className="w-8 h-8 text-blue-600"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                            <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                            <p className="text-gray-500 text-sm mb-3">{member.position}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Integrantes component error:', error);
        reportError(error);
    }
}
