function ChatInput({ onSendMessage, isLoading }) {
    try {
        const [message, setMessage] = React.useState('');

        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        const handleSubmit = (e) => {
            e.preventDefault();
            if (message.trim() && !isLoading) {
                onSendMessage(message.trim());
                setMessage('');
            }
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
            }
        };

        return (
            <div data-name="chat-input" data-file="components/ChatInput.js" className="bg-slate-800 border-t border-slate-700 p-4">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="relative">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message here..."
                            disabled={isLoading}
                            className="w-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 rounded-lg px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                            rows="1"
                            style={{ minHeight: '52px', maxHeight: '200px' }}
                        />
                        <button
                            type="submit"
                            disabled={!message.trim() || isLoading}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            <i data-lucide="send" className="w-5 h-5"></i>
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ChatInput component error:', error);
        reportError(error);
    }
}
