function Sidebar({ isOpen, onClose, chatHistory, onSelectChat, currentChatId }) {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        if (!isOpen) return null;

        return (
            <div data-name="sidebar" data-file="components/Sidebar.js" className="fixed inset-0 z-50 lg:relative lg:inset-auto">
                <div className="absolute inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose}></div>
                <div className="relative w-80 h-full bg-slate-900 border-r border-slate-700 flex flex-col">
                    <div className="p-4 border-b border-slate-700">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">Chat History</h2>
                            <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
                                <i data-lucide="x" className="w-5 h-5"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-2">
                        {chatHistory.length === 0 ? (
                            <div className="text-slate-400 text-center py-8">No chat history yet</div>
                        ) : (
                            chatHistory.map((chat) => (
                                <button
                                    key={chat.id}
                                    onClick={() => onSelectChat(chat.id)}
                                    className={`w-full text-left p-3 rounded-lg mb-2 transition-colors duration-200 ${
                                        currentChatId === chat.id
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-800'
                                    }`}
                                >
                                    <div className="font-medium truncate">{chat.title}</div>
                                    <div className="text-sm opacity-70">{chat.date}</div>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
    }
}
