const HOST = "https://ojzokspdt7.execute-api.ap-southeast-2.amazonaws.com/prod";

export class Request {
    constructor(method, path, body = null) {
        this.method = method;
        this.url = HOST + path;
        this.body = body
    }
}



export const sendRequest = async (request) => {
    try {
        const response = await fetch(request.url, {
            method: request.method,
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-api-key": "YviBGCapUH3rGw5afnbsd5hxGNg8lrbe1U0J5Zgx",
            },
            body: request.body ? JSON.stringify(request.body) : null,
        });

        switch (response.status) {
            case 200: // when GET success
            case 201:
                return await response.json();
            case 204:
                return true;
            default:
                console.error(await response.json());

        }

    } catch (e) {
        console.log("error")
    }
    return "ERROR";
};