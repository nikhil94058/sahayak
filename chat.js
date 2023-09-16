document.addEventListener('DOMContentLoaded', () => {
    const chatArea = document.getElementById('chat-area');
    const userMessageInput = document.getElementById('user-message');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        console.log('Send button clicked');
        const userMessage = userMessageInput.value;
        userMessageInput.value = ''; // Clear the input field

        // Send the user message to the server
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_message: userMessage }),
        })
        .then((response) => response.json())
        .then((data) => {
            const botResponse = data.bot_response;
            // Display the bot's response in the chat area
            const botMessage = document.createElement('div');
            botMessage.textContent = botResponse;
            chatArea.appendChild(botMessage);
        })
        .catch((error) => {
            console.error('API request failed:', error);
        });
    });
});
