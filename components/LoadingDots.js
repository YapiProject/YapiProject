function LoadingDots() {
    try {
        return (
            <div data-name="loading-dots" data-file="components/LoadingDots.js" className="flex items-center gap-1 py-2">
                <span className="text-slate-400 text-sm">Thinking</span>
                <div className="loading-dots ml-2">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('LoadingDots component error:', error);
        reportError(error);
    }
}
