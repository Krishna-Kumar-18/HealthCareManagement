import api from "./api";

export const login = async (email, password) => {
    const response = await api.post("/Auth/login", {
        email: email,
        password: password,
    });

    return response.data;
};

export const getCurrentUser = async () => {
    const response = await api.get("/Auth/test");

    return response.data;
};