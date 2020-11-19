const tableName = "LabnoteUsers";
const userPoolId = "ap-northeast-2_Bkxn8C0JS";
var AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
});


exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));
    let response = {};
    const id = event.pathParameters.id;

    try {
        var documentClientParams = {
            TableName: tableName,
            KeyConditionExpression: "id = :id",
            ExpressionAttributeValues: {
                ":id": id,
            },
        };
        const user1_1 = await documentClient.query(documentClientParams).promise();
        const user1_2 = user1_1["Items"][0];



        const user = { ...user1_2 };
        // console.log("!!!!!!", user)

        if (user1_1["Items"].length === 0) {
            throw "There is no note with the id that you request with.";
        }

        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(user),
        };
    } catch (exception) {
        console.error(exception);

        response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ "Message: ": exception }),
        };
    }
    return response;
};
