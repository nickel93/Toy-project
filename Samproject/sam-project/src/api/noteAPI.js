import { Request, sendRequest } from "./API";

export const getUser = async (userId) => {
    const request = new Request("GET", "/user/" + userId);
    const response = await sendRequest(request);
    console.log(userId);
    if (response !== "ERROR") {
        // console.log(response);
        return response;
    } else {
        return response;
    }
};

export const updateUserPosition = async (id, email, position) => {
    const request = new Request("PUT", "/user/position/" + id, {
        email: email,
        position: position,
    });
    const response = await sendRequest(request);

    if (response !== "ERROR") {
        // console.log(response);
        return response;
    } else {
        return response;
    }
};


