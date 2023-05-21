import { useTheme } from "../utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  colors: useTheme("light"),
  user: null, // id, email, image, bid, gender, follows
  token: localStorage.getItem("TOKEN_SM"),
  posts: [],
  notifications: {
    old: [],
    new: [],
  },
  activities: [],
  chatRooms: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.colors = useTheme(state.mode);
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setNewNotifications: (state, action) => {
      state.user.notifications.new.push(...action.payload.newNotifications);
    },
    setOldNotifications: (state) => {
      state.user.notifications.old.push(...state.user.notifications.new);
      state.user.notifications.new = [];
    },
    setActivities: (state, action) => {
      state.user.activities = action.payload.activities;
    },
    setFollowings: (state, action) => {
      if (state.user) {
        state.user.followings = action.payload.followings;
      }
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload.followers;
      }
    },
    setChatRooms: (state, action) => {
      state.chatRooms = action.payload.chatRooms;
    },
    addNewChatRoom: (state, action) => {
      state.chatRooms.push(action.payload.newChatRoom);
    },
    addNewChat: (state, action) => {
      state.chatRooms.chats.push(action.payload.newChat);
    },
    likeOrUnlikeChat: (state, action) => {
      state.chatRooms.chats.map((chat) => {
        if (chat.chat_id == action.payload.chat_id) {
          chat.likes = action.payload.likes;
        }
      });
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts.reverse();
    },
    addNewPost: (state, action) => {
      state.posts.unshift(action.payload.newPost);
    },
    // likeOrUnlikePost: (state, action) => {},
    // updatePost: (state, action) => {},
    // deletePost: (state, action) => {},
    // commentPost: (state, action) => {},
    // likeOrUnlikeComment: (state, action) => {},
    // updateComment: (state, action) => {},
    // deleteComment: (state, action) => {},
  },
});

export const { setLogin, setLogout, setUser } = authSlice.actions;
export default authSlice.reducer;
