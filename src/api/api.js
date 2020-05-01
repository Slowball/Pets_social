import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": 'b1998e62-ac48-444d-ba3a-a97e62cdc6dc',
    }
})

export let usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    getUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

};

export let author = {
    authorize() {
       return  instance.get(`auth/me`)
           .then(response => {
               return response.data;
           })
    }
};

export let profileAPI = {
    getProfile (userId) {
       return instance.get(`profile/`+ userId)
            .then(response => {
                return response.data;
            })
    }
}