import { Request, sendRequest } from "./API";

export const loadNote = async (id) => {

    const request = new Request("GET", "/notes/" + id);
    const response = await sendRequest(request);

    if (response !== "ERROR") {
        console.log(response);
        return response;
    } else {
        return null;
    }

};

export const saveNote = async (data) => {
    /**
     * Update the note and returns success or failure
     * @returns {bool} return
     */

    const request = new Request("PUT", "/notes/" + data.id, data);
    const response = await sendRequest(request);

    if (response !== "ERROR") {
        console.log(response);
        return response;
    } else {
        return null;
    }

    // TODO : check if the object returned is empty
};