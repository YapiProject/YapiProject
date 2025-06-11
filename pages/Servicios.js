function Servicios() {
    try {
        const services = [
            { 
                title: "Introducción básica a redes sociales", 
                description: "Aprende los conceptos fundamentales para usar Facebook, Instagram y X. Ideal para potenciar tu presencia en línea.",
                benefits: "Mayor interacción con clientes, mejor posicionamiento de marca",
                price: "$9.000 ARS x Hora",
                icon: "share-2"
            },
            { 
                title: "Manejo de cuentas empresariales y creación de anuncios", 
                description: "Estrategias para gestionar perfiles de empresas y diseñar campañas publicitarias eficaces en redes sociales.",
                benefits: "Aumento de ventas, segmentación de clientes, mayor alcance",
                price: "$8.000 - $12.000 ARS",
                icon: "megaphone"
            },
            { 
                title: "Descarga de programas para el sistema", 
                description: "Instalación y configuración de software esencial: antivirus, editores de texto, programas de diseño.",
                benefits: "Optimización del rendimiento, seguridad mejorada",
                price: "$3.500 ARS",
                icon: "download"
            },
            { 
                title: "Creación de documentos y aprendizaje básico", 
                description: "Capacitación en Word, Excel y PowerPoint para elaborar documentos profesionales.",
                benefits: "Facilidad para elaborar informes, mejorar productividad",
                price: "$4.500 ARS",
                icon: "file-text"
            },
            { 
                title: "Formateo e instalación de sistemas operativos", 
                description: "Restauración de computadoras, eliminación de errores. Instalación de Windows, Linux u otros sistemas.",
                benefits: "Dispositivo más rápido, eliminación de archivos corruptos",
                price: "$8.000 ARS",
                icon: "hard-drive"
            },
            { 
                title: "Soporte técnico en computadoras", 
                description: "Diagnóstico y reparación de fallos técnicos en hardware y software, optimización del rendimiento.",
                benefits: "Ahorro en mantenimiento, prolongación de vida útil",
                price: "$7.000 ARS",
                icon: "wrench"
            }
        ];

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="servicios" data-file="pages/Servicios.js" className="fade-in">
                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Servicios Brindados por YAPI</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg card-shadow hover-scale">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i data-lucide={service.icon} className="w-6 h-6 text-blue-600"></i>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                                    <p className="text-blue-700 text-sm mb-2"><strong>Beneficios:</strong> {service.benefits}</p>
                                    <div className="bg-purple-50 px-3 py-2 rounded-lg">
                                        <p className="text-purple-600 font-semibold text-sm">{service.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Servicios component error:', error);
        reportError(error);
    }
}
