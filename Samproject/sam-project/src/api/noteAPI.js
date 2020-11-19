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

