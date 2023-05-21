// Response
// currentuser follower-following oldnotifications newnotifications activitylogs chatrooms newchatroom newchat viewchat chat'slike chat'sview
// newcomment newpost
//  image gpt otheruser(s)

// find current user - response when login successfully
export const user_response = {
  user_id: 1001,
  name: "John Doe",
  password_hash: "$2y$10$UkAVXz00lC3cV7h3Z3J1d.zS0jF94MBoOhnwT16yWaqiXKQmDVK/O",
  email: "johndoe@example.com",
  image: "https://example.com/images/profile.jpg",
  created_at: "2022-05-04T12:30:45Z",
  bio: "A web developer from New York",
  gender: "Male",
  last_online: "2022-05-04T12:30:45Z",
  followers: [],
  followings: [],
  notifications: {
    old: [],
    new: [],
  },
  activities: [],
  chatRooms: [],
};

// find current user's old notification by id
export const old_notifications_response = [
  {
    notification_id: 1,
    type: "message",
    text: "You have a new message from John",
    seen: true,
    created_at: "2022-05-04T12:30:45Z",
  },
];

// find current user's new notification by id
export const new_notifications_response = [
  {
    notification_id: 1,
    type: "message",
    text: "You have a new message from John",
    seen: false,
    created_at: "2022-05-04T12:30:45Z",
  },
];

// find current user's activity logs by id
export const activity_logs_response = [
  {
    log_id: 1,
    type: "login",
    describe: "User logged in to the system",
    created_at: "2022-05-04T12:30:45Z",
  },
  {
    log_id: 2,
    type: "like",
    describe: "u like a picture",
    created_at: "2022-05-04T12:30:45Z",
  },
];

// find current user's follower by id
export const followers_response = [
  {
    user_id: 1002,
    name: "John son",
    image: "https://example.com/images/profile.jpg",
    created_at: "2022-05-04T12:30:45Z",
    bio: "A web developer from New York",
    gender: "Female",
    last_online: "2022-05-04T12:30:45Z",
  },
  {
    user_id: 1002,
    name: "Jane Smith",
    image: "https://example.com/images/profile.jpg",
    created_at: "2022-05-04T12:30:45Z",
    bio: "A software engineer from California",
    gender: "Female",
    last_online: "2022-05-04T12:30:45Z",
  },
];

// find current user' following by id
export const following_response = [
  {
    user_id: 1002,
    name: "John son",
    image: "https://example.com/images/profile.jpg",
    created_at: "2022-05-04T12:30:45Z",
    bio: "A web developer from New York",
    gender: "Female",
    last_online: "2022-05-04T12:30:45Z",
  },
  {
    user_id: 1002,
    name: "Jane Smith",
    image: "https://example.com/images/profile.jpg",
    created_at: "2022-05-04T12:30:45Z",
    bio: "A software engineer from California",
    gender: "Female",
    last_online: "2022-05-04T12:30:45Z",
  },
];

// find current user's chat rooms by id
export const chat_rooms_response = [
  {
    chat_room_id: 1,
    created_at: "2022-05-04T12:30:45Z",
    paticipants: [
      {
        paticipator_id: 1001,
        name: "John son",
        image: "https://example.com/images/profile.jpg",
        last_online: "2022-05-04T12:30:45Z",
        join_at: "2022-05-04T12:30:45Z",
      },
      {
        paticipator_id: 1003,
        name: "John doe",
        image: "https://example.com/images/profile.jpg",
        last_online: "2022-05-04T12:30:45Z",
        join_at: "2022-05-04T12:30:45Z",
      },
      {
        paticipator_id: 1005,
        name: "Anna",
        image: "https://example.com/images/profile.jpg",
        last_online: "2022-05-04T12:30:45Z",
        join_at: "2022-05-04T12:30:45Z",
      },
    ],
    chats: [
      {
        chat_id: 12,
        created_at: "2022-05-04T12:30:45Z",
        text: "hello",
        sender_id: 1001,
        likes: [
          {
            liker: 1001,
            created_at: "2022-05-04T12:30:45Z",
          },
          {
            liker: 1002,
            created_at: "2022-05-04T12:30:45Z",
          },
        ],
        viewers: [
          {
            viewers_id: 1001,
            seen_at: "2022-05-04T12:30:45Z",
          },
          {
            viewers_id: 1005,
            seen_at: "2022-05-04T12:30:45Z",
          },
        ],
      },
      {
        chat_id: 13,
        created_at: "2022-05-04T12:30:45Z",
        text: "hello against",
        sender_id: 1005,
        likes: [],
        viewers: [
          {
            viewers_id: 1003,
            seen_at: "2022-05-04T12:30:45Z",
          },
          {
            viewers_id: 1004,
            seen_at: "2022-05-04T12:30:45Z",
          },
        ],
      },
    ],
  },
  {
    chat_room_id: 2,
    created_at: "2022-05-04T12:30:45Z",
    paticipants: [
      {
        paticipator_id: 1001,
        name: "John son",
        image: "https://example.com/images/profile.jpg",
        last_online: "2022-05-04T12:30:45Z",
        join_at: "2022-05-04T12:30:45Z",
      },
      {
        paticipator_id: 1003,
        name: "John doe",
        image: "https://example.com/images/profile.jpg",
        last_online: "2022-05-04T12:30:45Z",
        join_at: "2022-05-04T12:30:45Z",
      },
      {
        paticipator_id: 1005,
        name: "Anna",
        image: "https://example.com/images/profile.jpg",
        last_online: "2022-05-04T12:30:45Z",
        join_at: "2022-05-04T12:30:45Z",
      },
    ],
    chats: [
      {
        chat_id: 12,
        created_at: "2022-05-04T12:30:45Z",
        text: "hello",
        sender_id: 1001,
        likes: [
          {
            liker_id: 1001,
            created_at: "2022-05-04T12:30:45Z",
          },
          {
            liker_id: 1002,
            created_at: "2022-05-04T12:30:45Z",
          },
        ],
        viewers: [
          {
            viewers_id: 1001,
            seen_at: "2022-05-04T12:30:45Z",
          },
          {
            viewers_id: 1005,
            seen_at: "2022-05-04T12:30:45Z",
          },
        ],
      },
      {
        chat_id: 13,
        created_at: "2022-05-04T12:30:45Z",
        text: "hello against",
        sender_id: 1005,
        likes: [],
        viewers: [
          {
            viewers_id: 1003,
            seen_at: "2022-05-04T12:30:45Z",
          },
          {
            viewers_id: 1004,
            seen_at: "2022-05-04T12:30:45Z",
          },
        ],
      },
    ],
  },
];

export const new_chat_room = {
  chat_room_id: 1,
  created_at: "2022-05-04T12:30:45Z",
  paticipants: [
    {
      paticipator_id: 1001,
      name: "John son",
      image: "https://example.com/images/profile.jpg",
      last_online: "2022-05-04T12:30:45Z",
      join_at: "2022-05-04T12:30:45Z",
    },
    {
      paticipator_id: 1003,
      name: "John doe",
      image: "https://example.com/images/profile.jpg",
      last_online: "2022-05-04T12:30:45Z",
      join_at: "2022-05-04T12:30:45Z",
    },
  ],
  chats: [
    {
      chat_id: 13,
      created_at: "2022-05-04T12:30:45Z",
      text: "hello",
      sender_id: 1005,
      likes: [],
      viewers: [],
    },
  ],
};

export const new_chat = {
  chat_room_id: 1,
  chat_id: 13,
  created_at: "2022-05-04T12:30:45Z",
  text: "hello",
  sender_id: 1005,
  likes: [],
  viewers: [],
};

export const updated_chat_likes = {
  chat_room_id: 1,
  chat_id: 13,
  likes: [
    {
      liker_id: 1001,
      created_at: "2022-05-04T12:30:45Z",
    },
    {
      liker_id: 1002,
      created_at: "2022-05-04T12:30:45Z",
    },
  ],
};

export const updated_chat_viewers = {
  chat_room_id: 1,
  old_chat_viewers: {
    chat_id: 13,
    viewers: [],
  },
  new_chat_viewers: {
    chat_id: 13,
    viewers: [
      {
        viewers_id: 1001,
        seen_at: "2022-05-04T12:30:45Z",
      },
      {
        viewers_id: 1005,
        seen_at: "2022-05-04T12:30:45Z",
      },
    ],
  },
};

// export const updatedViewers = [
//   {
//     viewers_id: 1001,
//     seen_at: "2022-05-04T12:30:45Z",
//   },
//   {
//     viewers_id: 1005,
//     seen_at: "2022-05-04T12:30:45Z",
//   },
// ];

// find other users by id
export const other_user_response = [
  {
    user_id: 1002,
    name: "John son",
    image: "https://example.com/images/profile.jpg",
    last_online: "2022-05-04T12:30:45Z",
  },
  {
    user_id: 1003,
    name: "Jane Smith",
    image: "https://example.com/images/profile.jpg",
    last_online: "2022-05-04T12:30:45Z",
  },
];

// find other users by searching name
export const other_users_response = [
  {
    user_id: 1002,
    name: "John son",
    image: "https://example.com/images/profile.jpg",
    last_online: "2022-05-04T12:30:45Z",
  },
  {
    user_id: 1003,
    name: "Jane Smith",
    image: "https://example.com/images/profile.jpg",
    last_online: "2022-05-04T12:30:45Z",
  },
];

// find all posts by all users
export const posts_response = [
  {
    post_id: 1,
    creator_id: 1001,
    description: "A beautiful sunset over the beach",
    image: "https://example.com/images/sunset.jpg",
    user_image: "https://example.com/user1001.jpg",
    created_at: "2022-05-04T12:30:45Z",
    likes: [
      {
        liker_id: 1002,
        created_at: "2022-05-04T12:30:45Z",
      },
      {
        liker_id: 1005,
        created_at: "2022-05-04T12:30:45Z",
      },
    ],
    comments: [
      {
        comment_id: 23,
        commentor_id: 1005,
        created_at: "2022-05-04T12:30:45Z",
        likes: [
          {
            liker_id: 1001,
            created_at: "2022-05-04T12:30:45Z",
          },
          {
            liker_id: 1003,
            created_at: "2022-05-04T12:30:45Z",
          },
        ],
        replied_comments: [
          {
            comment_id: 24,
            commentor_id: 1001,
            created_at: "2022-05-04T12:30:45Z",
          },
          {
            comment_id: 25,
            commentor_id: 1005,
            created_at: "2022-05-04T12:30:45Z",
          },
        ],
      },
      {
        comment_id: 43,
        commentor_id: 1005,
        created_at: "2022-05-04T12:30:45Z",
        likes: [
          {
            liker_id: 1002,
            created_at: "2022-05-04T12:30:45Z",
          },
        ],
        replied_comments: [],
      },
    ],
  },
  {
    post_id: 2,
    creator_id: 1003,
    description: "Just finished a challenging hike",
    image: "https://example.com/images/hike.jpg",
    created_at: "2022-05-03T14:20:10Z",
    likes: [
      {
        liker_id: 1001,
        created_at: "2022-05-03T14:20:10Z",
      },
      {
        liker_id: 1002,
        created_at: "2022-05-03T14:20:10Z",
      },
    ],
    comments: [
      {
        comment_id: 34,
        commentor_id: 1001,
        created_at: "2022-05-03T14:20:10Z",
        likes: [
          {
            liker_id: 1002,
            created_at: "2022-05-03T14:20:10Z",
          },
          {
            liker_id: 1005,
            created_at: "2022-05-03T14:20:10Z",
          },
        ],
        replied_comments: [
          {
            comment_id: 35,
            commentor_id: 1002,
            created_at: "2022-05-03T14:20:10Z",
          },
        ],
      },
      {
        comment_id: 67,
        commentor_id: 1002,
        created_at: "2022-05-03T14:20:10Z",
        likes: [
          {
            liker_id: 1001,
            created_at: "2022-05-03T14:20:10Z",
          },
        ],
        replied_comments: [],
      },
    ],
  },
  {
    post_id: 3,
    creator_id: 1005,
    description: "Trying out a new recipe for dinner",
    image: "https://example.com/images/cooking.jpg",
    created_at: "2022-05-02T09:30:15Z",
    likes: [
      {
        liker_id: 1003,
        created_at: "2022-05-02T09:30:15Z",
      },
      {
        liker_id: 1004,
        created_at: "2022-05-02T09:30:15Z",
      },
    ],
    comments: [
      {
        comment_id: 21,
        commentor_id: 1002,
        created_at: "2022-05-02T09:30:15Z",
        likes: [],
      },
    ],
  },
];

export const new_comment = {
  post_id: 1,
  comment_id: 23,
  commentor_id: 1005,
  created_at: "2022-05-04T12:30:45Z",
  likes: [],
  replied_comments: [],
};

export const updated_post_likes = {
  post_id: 1,
  likes: [
    {
      liker_id: 1002,
      created_at: "2022-05-04T12:30:45Z",
    },
    {
      liker_id: 1005,
      created_at: "2022-05-04T12:30:45Z",
    },
  ],
};

export const updated_comment_likes = {
  post_id: 1,
  comment_id: 23,
  likes: [
    {
      liker_id: 1002,
      created_at: "2022-05-04T12:30:45Z",
    },
    {
      liker_id: 1005,
      created_at: "2022-05-04T12:30:45Z",
    },
  ],
};

export const new_post = {
  post_id: 1,
  creator_id: 1001,
  description: "A beautiful sunset over the beach",
  image: "https://example.com/images/sunset.jpg",
  created_at: "2022-05-04T12:30:45Z",
  likes: [],
  comments: [],
};

export const image = "http://something";

export const gpt_reply = `<lang>Python</lang>
<code>
def add_numbers(a, b):
"""
This function takes two numbers as input and returns their sum.
"""
return a + b
</code>

You can use this function by calling it with two numbers as arguments, like this:

<code>
num1 = 5
num2 = 7
result = add_numbers(num1, num2)
print("The sum is:", result)
</code>
This will output:

<code>
The sum is: 12
</code>`;

//Request
// user like comment likecomment notification createpost createimage gpt follow-unfollow follows userprofile chatroom creatchatroom createchat likechat viewchat activitylog newactivity

export const sign_up_request = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "exampleuser",
    email: "exampleuser@example.com",
    password: "mypassword",
  }),
};

export const log_in_request = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "exampleuser@example.com",
    password: "mypassword",
  }),
};

export const log_out_request = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

export const by_user_id_request = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user_id: 1001,
  }),
};

export const all_posts_request = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};

export const like_post = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    post_id: 1,
    liker_id: 1002,
  }),
};

export const comment_post = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    post_id: 1,
    commentor_id: 1005,
    reply_to: 24, // reply to other comment
  }),
};

export const like_comment = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    post_id: 1,
    comment_id: 24,
    liker_id: 1002,
  }),
};

export const by_name_request = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nameToSearc: "John",
  }),
};

export const create_post = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    creator_id: 1001,
    description: "A beautiful sunset over the beach",
    image: "https://example.com/images/sunset.jpg",
    user_image: "https://example.com/user1001.jpg",
  }),
};

export const create_image = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    promt: "A beautiful sunset over the beach",
  }),
};

export const ask_gpt = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    promt: "how many 1 + 1 equal to?",
  }),
};

export const creatchatroom = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    paticipants: [
      {
        paticipator_id: 1001,
        name: "John son",
        image: "https://example.com/images/profile.jpg",
      },
      {
        paticipator_id: 1002,
        name: "John son",
        image: "https://example.com/images/profile.jpg",
      },
    ],
  }),
};

export const createchat = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_room_id: 2,
    text: "hello",
    sender_id: 1001,
  }),
};

export const like_chat = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_room_id: 2,
    chat_id: 12,
    liker_id: 1002,
  }),
};

export const view_chat = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_room_id: 2,
    chat_id: 12,
    viewers_id: 1001,
  }),
};

export const create_activity = {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user_id: 1001,
    type: "like",
    describe: "like another post",
  }),
};
