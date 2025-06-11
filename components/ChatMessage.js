function ChatMessage({ message, isUser, isLoading }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="chat-message" data-file="components/ChatMessage.js" className={`flex gap-4 p-4 ${isUser ? 'bg-slate-800/50' : 'bg-slate-900/50'} fade-in`}>
                <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isUser 
                            ? 'bg-blue-600' 
                            : 'bg-gradient-to-r from-green-500 to-emerald-600'
                    }`}>
                        <i data-lucide={isUser ? "user" : "bot"} className="w-4 h-4 text-white"></i>
                    </div>
                </div>
                
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-300 mb-1">
                        {isUser ? 'You' : 'Assistant'}
                    </div>
                    <div className="text-slate-100 leading-relaxed">
                        {isLoading ? (
                            <LoadingDots />
                        ) : (
                            <div className="whitespace-pre-wrap">{message}</div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ChatMessage component error:', error);
        reportError(error);
    }
}
