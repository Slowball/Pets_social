import {usersAPI} from "../api/api";
import React from "react";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_USER = 'TOGGLE_IS_FOLLOWING_USER';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
    toggleFollowing: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            };
            case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.count,
            };
        case TOGGLE_IS_FOLLOWING_USER:
            return {
                ...state,
                toggleFollowing: action.isFetching ?
                [...state.toggleFollowing, action.id] :
                state.toggleFollowing.filter(id => id != action.id),
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (action.userID === e.id) {
                        return {...e, followed: true}
                    }
                    return e;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (action.userID === e.id) {
                        return {...e, followed: false}
                    }
                    return e;
                })
            };
        default:
            return state;
    }


};

export let toggleFollowingProcess = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_USER, isFetching, id});
export let setIsFetching = (current) => ({type: TOGGLE_IS_FETCHING, count: current});
export let setTotalUserCount = (userCount) => ({type: SET_TOTAL_USER_COUNT, count: userCount});
export let follow = (userID) => ({type: FOLLOW, userID});
export let setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export let unfollow = (userID) => ({type: UNFOLLOW, userID});
export let setUsers = (users) => ({type: SET_USERS, users});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
            });
    }
};

export const disableFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcess(true, id));
        usersAPI.getUnfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id));
                }
                dispatch(toggleFollowingProcess(false, id));
            });
    }
};

export const turnOnFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProcess(true, id));
        usersAPI.getFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id));
                }
                dispatch(toggleFollowingProcess(false, id));
            });
    }
};


export default userReducer;
