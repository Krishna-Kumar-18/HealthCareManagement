import api from "./api"

export const login = (email, password) => {
    return api.post("/Auth/login", {
        email: email,
        password: password
    })
};