const tableName = "LabnoteUsers";
const userPoolId = "ap-northeast-2_Bkxn8C0JS";
var AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: "2012-08-10",
});
var cognito = new AWS.CognitoIdentityServiceProvider();

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

        var cognitoParams = {
            UserPoolId: userPoolId,
            Filter: 'sub = "' + id + '"',
        };
        const user2_1 = await cognito.listUsers(cognitoParams).promise();
        const user2_2 = user2_1.Users[0].Attributes.reduce((acc, cur) => {
            acc[cur.Name] = cur.Value;
            return acc;
        }, {});

        const user3_1 = await cognito
            .adminListGroupsForUser({
                UserPoolId: userPoolId,
                Username: user2_2.email,
            })
            .promise();
        let groupName = null;
        if (user3_1.Groups.length > 0) {
            groupName = user3_1.Groups[0].GroupName;
        }

        const user = { ...user1_2, ...user2_2, ...{ group: groupName } };
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
