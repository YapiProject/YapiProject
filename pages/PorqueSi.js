function PorqueSi() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="porquesi" data-file="pages/PorqueSi.js" className="fade-in">
                <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">¿Por qué nos deben contratar?</h2>
                
                <div className="bg-white p-8 rounded-lg card-shadow text-center mb-8">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="users" className="w-10 h-10 text-blue-600"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-6">Nuestra Filosofía</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Somos una empresa que intenta buscar la solución en cualquier problema que el cliente tenga. 
                        Con la ayuda mutua de nosotros 3, haremos que el cliente tenga la mejor experiencia y la ayuda 
                        que está buscando, e incluso una comodidad con el resultado que le hemos brindado.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg card-shadow hover-scale text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="target" className="w-8 h-8 text-blue-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Soluciones Personalizadas</h4>
                        <p className="text-gray-600">Buscamos la mejor solución para cada problema específico</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg card-shadow hover-scale text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="heart-handshake" className="w-8 h-8 text-purple-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Trabajo en Equipo</h4>
                        <p className="text-gray-600">La colaboración de nuestros 3 integrantes garantiza el mejor resultado</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg card-shadow hover-scale text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="smile" className="w-8 h-8 text-blue-600"></i>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-3">Satisfacción Garantizada</h4>
                        <p className="text-gray-600">Tu comodidad y satisfacción con nuestros resultados es nuestra prioridad</p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('PorqueSi component error:', error);
        reportError(error);
    }
}
