function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-blue-900 text-white text-center py-8 mt-16">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-lg">&copy; 2025 YAPI - Todos los derechos reservados.</p>
                    <p className="text-blue-200 mt-2">Tecnología que nunca falla</p>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
