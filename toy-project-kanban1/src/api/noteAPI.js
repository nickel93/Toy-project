import { Request, sendRequest } from "./API";

export const loadNote = async (noteId, email) => {
    /**
     * Load the note with id to request with.
     * @returns {object} return
     */
    // const request = new Request("GET", "/notes/" + noteId);
    const request = new Request("GET", `/notes?noteId=${noteId}&email=${email}`);
    const response = await sendRequest(request);

    // if (response !== "ERROR") {
    //   console.log(response);
    //   return response;
    // } else {
    //   return null;
    // }
    return response;
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