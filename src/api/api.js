import * as axios from "axios";

const instance = axios.create({
    withCredetials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    "API-KEY": "f8b8860b-d1a3-4306-b3c2-9fd57ae66342",
    }
);

export const usersAPI = {
   getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}



export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
        return response.data
    });
}