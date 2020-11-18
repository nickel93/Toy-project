import { Request, sendRequest } from "./API";

export const loadUser = async (noteId) => {
    /**
     * Load the note with id to request with.
     * @returns {object} return
     */
    // const request = new Request("GET", "/notes/" + noteId);
    const request = new Request("GET", `/user?id=${noteId}`);
    const response = await sendRequest(request);

    // if (response !== "ERROR") {
    //   console.log(response);
    //   return response;
    // } else {
    //   return null;
    // }
    return response;
};

