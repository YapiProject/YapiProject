function App() {
    try {
        const [activeSection, setActiveSection] = React.useState('integrantes');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const renderSection = () => {
            switch (activeSection) {
                case 'integrantes':
                    return React.createElement(Integrantes);
                case 'servicios':
                    return React.createElement(Servicios);
                case 'porquesi':
                    return React.createElement(PorqueSi);
                case 'contacto':
                    return React.createElement(Contacto);
                default:
                    return React.createElement(Integrantes);
            }
        };

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen flex flex-col">
                <Header />
                <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
                
                <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
                    {renderSection()}
                </main>
                
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
