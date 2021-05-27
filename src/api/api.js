import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'db9b3259-2bf7-4e48-8f6b-f1ae450e85c1'
    },
    
});


export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus (status) {
        return instance.put('profile/status', {status})
            .then(response => response.data);
    },
    saveUpdateProfile (formData) {
        return instance.put('/profile', formData)
            .then(response => response.data);
    },
    uploadPhoto (file) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put ('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },
};


export const authAPI = {
    login (email, password, rememberMe, captcha) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout () {
        return instance.delete('auth/login')
            .then(response => response.data);
    },
    authMe () {
        return instance.get('auth/me')
            .then(response => response.data);
    },
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data);
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const validateAPI = {
    isValidEmailFormat(email) {
        return axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=237ade016c8e48efa552fbc7546bdb28&email=${email}`);
    }
}

