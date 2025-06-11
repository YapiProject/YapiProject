function Header() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <header data-name="header" data-file="components/Header.js" className="gradient-bg text-white py-12 text-center">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-6">
                        <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center p-2">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_1152ba87c8000001/33b3944a-4398-46ad-bf5a-36c7953be09b.png" 
                                alt="Logo YAPI" 
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                        <h1 className="text-5xl font-bold mb-4">YAPI</h1>
                        <p className="text-xl italic">"Yapi lo arregla, Yapi lo instala, tecnología que nunca falla."</p>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
