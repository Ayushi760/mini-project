import officeImage from "../assets/office2.jpg"
import office from "../assets/office.jpg"
export const userData = [
    {
        id: 1,
        name: "Alice",
        profilePhoto: 'https://randomuser.me/api/portraits/men/41.jpg',
        isOnline: true,
        phoneNumber: "+1234567890",
        about: "Just a software developer enjoying life.",
        chat: {
            user: "Alice",
            messages: [
                {
                    sender: "Alice",
                    text: "Hey there! How's it going?",
                    date: "24/09/2024",
                    time: "10:00 am",
                },
                {
                    sender: "You",
                    text: "Hey Alice! I'm doing well, what about you?",
                    date: "24/09/2024",
                    time: "10:02 am",
                    isRead: true
                },
                {
                    sender: "Alice",
                    text: "I'm good too, just a bit busy",
                    date: "24/09/2024",
                    time: "10:05 am",
                },
                {
                    sender: "You",
                    text: "Glad to hear that!",
                    date: "24/09/2024",
                    time: "10:10 am",
                    isRead: true
                },
                {
                    sender: "Alice",
                    text: "Have you started on the project we discussed?",
                    date: "24/09/2024",
                    time: "10:15 am"
                },
                {
                    sender: "You",
                    text: "Yes, just getting into it. Should be fun!",
                    date: "24/09/2024",
                    time: "10:18 am",
                    isRead: false
                },
                {
                    sender: "Alice",
                    image: {
                        url: officeImage,
                        caption: "In office....."
                    },
                    date: "24/09/2024",
                    time: "10:20 am"
                }
            ]
        }
    },
    {
        id: 2,
        name: "Bob",
        profilePhoto: 'https://randomuser.me/api/portraits/men/42.jpg',
        isOnline: false,
        chat: {
            user: "Bob",
            messages: [
                {
                    sender: "Bob",
                    text: "Hey! What's up?",
                    date: "23/09/2024",
                    time: "9:30 pm"
                },
                {
                    sender: "You",
                    text: "Not much, just relaxing.",
                    date: "23/09/2024",
                    time: "9:32 pm",
                    isRead: true
                },
                {
                    sender: "Bob",
                    text: "Nice! Any plans for the weekend?",
                    date: "23/09/2024",
                    time: "9:35 pm"
                },
                {
                    sender: "You",
                    text: "Thinking of going hiking. You?",
                    date: "23/09/2024",
                    time: "9:36 pm",
                    isRead: true
                },
                {
                    sender: "Bob",
                    text: "Sounds awesome! I'm just catching up on some shows.",
                    date: "23/09/2024",
                    time: "9:40 pm"
                },
                {
                    sender: "You",
                    image: {
                        url: office,
                        caption: "In office, doing late night shift for today."
                    },
                    date: "23/09/2024",
                    time: "9:46 pm",
                    isRead: true
                }
            ]
        }
    },
    {
        id: 3,
        name: "Charlie",
        profilePhoto: 'https://randomuser.me/api/portraits/men/43.jpg',
        isOnline: true,
        chat: {
            user: "Charlie",
            messages: [
                {
                    sender: "Charlie",
                    text: "Hey! How's your day going?",
                    date: "24/09/2024",
                    time: "10:20 am"
                },
                {
                    sender: "You",
                    text: "Pretty good! Just busy with work.",
                    date: "24/09/2024",
                    time: "10:22 am",
                    isRead: true
                },
                {
                    sender: "Charlie",
                    text: "I feel you! What are you working on?",
                    date: "24/09/2024",
                    time: "10:25 am"
                },
                {
                    sender: "You",
                    text: "Just a project proposal. It’s quite challenging!",
                    date: "24/09/2024",
                    time: "10:27 am",
                    isRead: true
                },
                {
                    sender: "Charlie",
                    text: "I can help if you need it!",
                    date: "24/09/2024",
                    time: "10:30 am"
                }
            ]
        }
    },
    {
        id: 4,
        name: "David",
        profilePhoto: 'https://randomuser.me/api/portraits/men/44.jpg',
        isOnline: false,
        chat: {
            user: "David",
            messages: [
                {
                    sender: "David",
                    text: "Hey! Are we still on for tomorrow?",
                    date: "23/09/2024",
                    time: "5:00 pm"
                },
                {
                    sender: "You",
                    text: "Absolutely! Looking forward to it.",
                    date: "23/09/2024",
                    time: "5:02 pm",
                    isRead: true
                },
                {
                    sender: "David",
                    text: "Great! What time?",
                    date: "23/09/2024",
                    time: "5:05 pm"
                },
                {
                    sender: "You",
                    text: "How about 2 PM?",
                    date: "23/09/2024",
                    time: "5:10 pm",
                    isRead: true
                },
                {
                    sender: "David",
                    text: "Sounds good! Let's meet at the cafe?",
                    date: "23/09/2024",
                    time: "5:12 pm"
                },
                {
                    sender: "You",
                    text: "Perfect! See you then.",
                    date: "23/09/2024",
                    time: "5:15 pm",
                    isRead: true
                }
            ]
        }
    },
    {
        id: 5,
        name: "Eve",
        profilePhoto: 'https://randomuser.me/api/portraits/men/45.jpg',
        isOnline: true,
        chat: {
            user: "Eve",
            messages: [
                {
                    sender: "Eve",
                    text: "Hey! Long time no see!",
                    date: "24/09/2024",
                    time: "11:00 am"
                },
                {
                    sender: "You",
                    text: "I know, right? How have you been?",
                    date: "24/09/2024",
                    time: "11:02 am",
                    isRead: true
                },
                {
                    sender: "Eve",
                    text: "Busy with work, but good overall.",
                    date: "24/09/2024",
                    time: "11:05 am"
                },
                {
                    sender: "Eve",
                    image: {
                        url: office,
                    },
                    date: "23/09/2024",
                    time: "11:07 am",
                },
                {
                    sender: "You",
                    text: "Glad to hear that!",
                    date: "24/09/2024",
                    time: "11:10 am",
                    isRead: true
                },
                {
                    sender: "Eve",
                    text: "What about you? Any exciting news?",
                    date: "24/09/2024",
                    time: "11:15 am"
                },
                {
                    sender: "You",
                    text: "Just got a promotion at work!",
                    date: "24/09/2024",
                    time: "11:20 am",
                    isRead: true
                },
                {
                    sender: "Eve",
                    text: "That's amazing! Congratulations!",
                    date: "24/09/2024",
                    time: "11:25 am"
                }
            ]
        }
    },
    {
        id: 6,
        name: "Frank",
        profilePhoto: 'https://randomuser.me/api/portraits/men/46.jpg',
        isOnline: false,
        chat: {
            user: "Frank",
            messages: [
                {
                    sender: "You",
                    image: {
                        url: office
                    },
                    date: "23/09/2024",
                    time: "9:46 pm",
                    isRead: true
                }
            ]
        }
    },
    {
        id: 7,
        name: "Grace",
        profilePhoto: 'https://randomuser.me/api/portraits/men/47.jpg',
        isOnline: true,
        chat: {
            user: "Grace",
            messages: [
                {
                    sender: "Grace",
                    text: "Hi! How's everything?",
                    date: "24/09/2024",
                    time: "11:30 am"
                },
                {
                    sender: "You",
                    text: "Doing well, thanks! How about you?",
                    date: "24/09/2024",
                    time: "11:32 am",
                    isRead: true
                },
                {
                    sender: "Grace",
                    text: "Busy with school, but can't complain.",
                    date: "24/09/2024",
                    time: "11:35 am"
                },
                {
                    sender: "You",
                    text: "What are you studying these days?",
                    date: "24/09/2024",
                    time: "11:40 am",
                    isRead: true
                },
                {
                    sender: "Grace",
                    text: "Focusing on my major project for the semester.",
                    date: "24/09/2024",
                    time: "11:42 am"
                }
            ]
        }
    },
    {
        id: 8,
        name: "Hank",
        profilePhoto: 'https://randomuser.me/api/portraits/men/47.jpg',
        isOnline: true,
        chat: {
            user: "Hank",
            messages: [
                {
                    sender: "Hank",
                    text: "Hey! You free for a call?",
                    date: "24/09/2024",
                    time: "12:00 pm"
                },
                {
                    sender: "You",
                    text: "Sure! What's up?",
                    date: "24/09/2024",
                    time: "12:01 pm",
                    isRead: true
                },
                {
                    sender: "Hank",
                    text: "Just wanted to catch up!",
                    date: "24/09/2024",
                    time: "12:02 pm"
                },
                {
                    sender: "You",
                    text: "Sounds great! Call me when you're ready.",
                    date: "24/09/2024",
                    time: "12:03 pm",
                    isRead: true
                }
            ]
        }
    },
    {
        id: 9,
        name: "Ivy",
        profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
        isOnline: false,
        chat: {
            user: "Ivy",
            messages: [
                {
                    sender: "Ivy",
                    text: "Did you finish the project?",
                    date: "22/09/2024",
                    time: "3:00 pm"
                },
                {
                    sender: "You",
                    text: "Almost done, just a few tweaks left.",
                    date: "22/09/2024",
                    time: "3:02 pm",
                    isRead: true
                },
                {
                    sender: "Ivy",
                    text: "Great! Let me know when you're done.",
                    date: "22/09/2024",
                    time: "3:05 pm"
                },
                {
                    sender: "You",
                    text: "Will do! I should have it ready by tomorrow.",
                    date: "22/09/2024",
                    time: "3:07 pm",
                    isRead: true
                },
                {
                    sender: "Ivy",
                    text: "Awesome! Looking forward to it.",
                    date: "22/09/2024",
                    time: "3:10 pm"
                }
            ]
        }
    },
    {
        id: 10,
        name: "Jack",
        profilePhoto: 'https://randomuser.me/api/portraits/men/48.jpg',
        isOnline: true,
        chat: {
            user: "Jack",
            messages: [
                {
                    sender: "Jack",
                    text: "Yo! Wanna hang out later?",
                    date: "24/09/2024",
                    time: "1:00 pm"
                },
                {
                    sender: "You",
                    text: "Sounds good! What time?",
                    date: "24/09/2024",
                    time: "1:02 pm",
                    isRead: true
                },
                {
                    sender: "Jack",
                    text: "How about 4 PM?",
                    date: "24/09/2024",
                    time: "1:05 pm"
                },
                {
                    sender: "You",
                    text: "Perfect! Let’s meet at the park.",
                    date: "24/09/2024",
                    time: "1:07 pm",
                    isRead: true
                },
                {
                    sender: "Jack",
                    text: "Cool! I’ll bring snacks.",
                    date: "24/09/2024",
                    time: "1:10 pm"
                }
            ]
        }
    },
    {
        id: 11,
        name: "Kelly",
        profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
        isOnline: false,
        chat: {
            user: "Kelly",
            messages: [
                {
                    sender: "Kelly",
                    text: "Can we reschedule our meeting?",
                    date: "21/09/2024",
                    time: "2:00 pm"
                },
                {
                    sender: "You",
                    text: "Sure! When works for you?",
                    date: "21/09/2024",
                    time: "2:02 pm",
                    isRead: true
                },
                {
                    sender: "Kelly",
                    text: "How about next Tuesday?",
                    date: "21/09/2024",
                    time: "2:05 pm"
                },
                {
                    sender: "You",
                    text: "That works for me!",
                    date: "21/09/2024",
                    time: "2:07 pm",
                    isRead: true
                },
                {
                    sender: "Kelly",
                    text: "Great! I'll send a calendar invite.",
                    date: "21/09/2024",
                    time: "2:10 pm"
                }
            ]
        }
    },
    {
        id: 12,
        name: "Liam",
        profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
        isOnline: true,
        chat: {
            user: "Liam",
            messages: [
                {
                    sender: "Liam",
                    text: "Hey! Any chance you can help me with the homework?",
                    date: "24/09/2024",
                    time: "1:30 pm"
                },
                {
                    sender: "You",
                    text: "Sure! What do you need help with?",
                    date: "24/09/2024",
                    time: "1:32 pm",
                    isRead: true
                },
                {
                    sender: "Liam",
                    text: "The math problems are tough!",
                    date: "24/09/2024",
                    time: "1:35 pm"
                },
                {
                    sender: "You",
                    text: "No problem, let's tackle them together!",
                    date: "24/09/2024",
                    time: "1:37 pm",
                    isRead: true
                },
                {
                    sender: "Liam",
                    text: "Thanks! I appreciate it.",
                    date: "24/09/2024",
                    time: "1:40 pm"
                }
            ]
        }
    },
    {
        id: 13,
        name: "Mia",
        profilePhoto: 'https://randomuser.me/api/portraits/men/51.jpg',
        isOnline: false,
        chat: {
            user: "Mia",
            messages: [
                {
                    sender: "Mia",
                    text: "Do you want to join the study group?",
                    date: "22/09/2024",
                    time: "4:00 pm"
                },
                {
                    sender: "You",
                    text: "Sure! When do you meet?",
                    date: "22/09/2024",
                    time: "4:02 pm",
                    isRead: true
                },
                {
                    sender: "Mia",
                    text: "Every Thursday at 5 PM.",
                    date: "22/09/2024",
                    time: "4:05 pm"
                },
                {
                    sender: "You",
                    text: "That works for me!",
                    date: "22/09/2024",
                    time: "4:07 pm",
                    isRead: true
                }
            ]
        }
    },
    {
        id: 14,
        name: "Noah",
        profilePhoto: 'https://randomuser.me/api/portraits/men/7.jpg',
        isOnline: true,
        chat: {
            user: "Noah",
            messages: [
                {
                    sender: "Noah",
                    text: "What's up? You around?",
                    date: "24/09/2024",
                    time: "1:45 pm"
                },
                {
                    sender: "You",
                    text: "Yeah! Just finished lunch.",
                    date: "24/09/2024",
                    time: "1:46 pm",
                    isRead: true
                },
                {
                    sender: "Noah",
                    text: "Wanna play some video games later?",
                    date: "24/09/2024",
                    time: "1:48 pm"
                },
                {
                    sender: "You",
                    text: "Absolutely! What time?",
                    date: "24/09/2024",
                    time: "1:50 pm",
                    isRead: true
                },
                {
                    sender: "Noah",
                    text: "How about 6 PM?",
                    date: "24/09/2024",
                    time: "1:52 pm"
                },
                {
                    sender: "You",
                    text: "Perfect! I’ll be ready.",
                    date: "24/09/2024",
                    time: "1:54 pm",
                    isRead: true
                }
            ]
        }
    },
    {
        id: 15,
        name: "Olivia",
        profilePhoto: 'https://randomuser.me/api/portraits/men/9.jpg',
        isOnline: false,
        chat: {
            user: "Olivia",
            messages: [
                {
                    sender: "Olivia",
                    text: "Are we still on for dinner?",
                    date: "23/09/2024",
                    time: "6:00 pm"
                },
                {
                    sender: "You",
                    text: "Yes! What time are you thinking?",
                    date: "23/09/2024",
                    time: "6:01 pm",
                    isRead: true
                },
                {
                    sender: "Olivia",
                    text: "How about 7:30 PM?",
                    date: "23/09/2024",
                    time: "6:05 pm"
                },
                {
                    sender: "You",
                    text: "Sounds perfect!",
                    date: "23/09/2024",
                    time: "6:06 pm",
                    isRead: true
                },
                {
                    sender: "Olivia",
                    text: "See you then!",
                    date: "23/09/2024",
                    time: "6:07 pm"
                }
            ]
        }
    }

]
export const groupData = [
    {
        id: 1,
        name: "Project Team",
        admin: "Alice",
        members: [
            {
                id: 1,
                name: "Alice",
                profilePhot: "https://randomuser.me/api/portraits/women/1.jpg",
                isOnline: true
            },
            {
                id: 2,
                name: "Bob",
                profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
                isOnline: false
            },
            {
                id: 3,
                name: "Charlie",
                profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
                isOnline: true
            }
        ],
        messages: [
            {
                sender: "Alice",
                text: "Hey team, we have a meeting tomorrow at 10 AM.",
                date: "24/09/2024",
                time: "09:00 AM",
                isRead: false
            },
            {
                sender: "Bob",
                text: "Sounds good! I'll be there.",
                date: "24/09/2024",
                time: "09:01 AM",
                isRead: true
            },
            {
                sender: "Charlie",
                text: "I'll join too, thanks for the reminder!",
                date: "24/09/2024",
                time: "09:02 AM",
                isRead: true
            }
        ],
        "createdAt": "2023-01-01T12:00:00Z",
        "updatedAt": "2024-09-24T10:00:00Z"
    }
]