const chatAgent = async (userMessage, chatHistory) => {
    try {
        const historyContext = chatHistory
            .map(msg => `${msg.isUser ? 'User' : 'Assistant'}: ${msg.content}`)
            .join('\n');

        const systemPrompt = `You are a helpful AI assistant similar to ChatGPT. You should provide thoughtful, accurate, and helpful responses to user questions. Be conversational but professional.

Previous conversation:
${historyContext}`;

        const userPrompt = userMessage;
        
        const response = await invokeAIAgent(systemPrompt, userPrompt);
        return response;
    } catch (error) {
        console.error('Chat agent error:', error);
        throw new Error('Failed to get AI response. Please try again.');
    }
};
