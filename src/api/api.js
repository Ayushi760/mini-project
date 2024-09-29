import axios from 'axios';

//Fetch all users
export const fetchUsers = async() =>{
    const response = await axios.get('http://localhost:3001/users');
    return response.data;
}

// Fetch user messages
export const fetchUserMessages = async (userId) => {
  const { data } = await axios.get(`http://localhost:3001/users/${userId}`);
  return data.chat.messages;
};

// Send a new message
export const sendMessage = async ({ userId, newMessage }) => {
    const { data } = await axios.get(`http://localhost:3001/users/${userId}`);
    const updatedMessages = [...data.chat.messages, newMessage];

    // Update the user with the new message
    await axios.patch(`http://localhost:3001/users/${userId}`, {
        chat: {
            user: data.chat.user,
            messages: updatedMessages,
        },
    });

    return newMessage;
};

