function Navigation({ activeSection, onSectionChange }) {
    try {
        const menuItems = [
            { id: 'integrantes', label: 'Integrantes', icon: 'users' },
            { id: 'servicios', label: 'Servicios', icon: 'wrench' },
            { id: 'porquesi', label: '¿Por qué contratarnos?', icon: 'star' },
            { id: 'contacto', label: 'Contacto', icon: 'phone' }
        ];

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <nav data-name="navigation" data-file="components/Navigation.js" className="bg-blue-700 shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2 py-4">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onSectionChange(item.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    activeSection === item.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-white hover:bg-blue-600'
                                }`}
                            >
                                <i data-lucide={item.icon} className="w-4 h-4"></i>
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation component error:', error);
        reportError(error);
    }
}
