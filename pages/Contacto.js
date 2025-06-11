function Contacto() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="contacto" data-file="pages/Contacto.js" className="fade-in">
                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Contáctanos</h2>
                
                <div className="text-center mb-8">
                    <p className="text-lg text-gray-700">
                        Si está interesado, o tiene alguna duda, puede contactarnos en:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-lg card-shadow text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="mail" className="w-8 h-8 text-blue-600"></i>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Gmail</h3>
                        <a 
                            href="mailto:yapiproject2@gmail.com" 
                            className="text-blue-600 text-lg hover:text-blue-700 transition-colors"
                        >
                            yapiproject2@gmail.com
                        </a>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg card-shadow text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="instagram" className="w-8 h-8 text-purple-600"></i>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instagram</h3>
                        <a 
                            href="https://instagram.com/yapi.project" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-600 text-lg hover:text-purple-700 transition-colors"
                        >
                            @yapi.project
                        </a>
                    </div>
                </div>

                <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">¿Necesitas ayuda?</h3>
                    <p className="text-lg text-gray-700">
                        No dudes en escribirnos. Estamos aquí para resolver cualquier problema tecnológico que tengas.
                    </p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Contacto component error:', error);
        reportError(error);
    }
}
