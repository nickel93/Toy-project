const tableName = "LabnoteUsers";
const userPoolId = "ap-northeast-2_Bkxn8C0JS";
var AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-northeast-2' });
var cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));
    let response = "";
    const id = event.pathParameters.id;
    const body = JSON.parse(event.body);
    console.log(event.body);
    try {
        var cognitoParams = {
            UserAttributes: [
                {
                    Name: "custom:position",
                    Value: body.position,
                },
            ],
            UserPoolId: userPoolId,
            Username: body.email,
        };
        await cognito.adminUpdateUserAttributes(cognitoParams).promise();

        var documentClientParams = {
            TableName: tableName,
            Key: { id: id },
            UpdateExpression: "set #p = :p",
            ExpressionAttributeNames: { "#p": "position" },
            ExpressionAttributeValues: {
                ":p": body.position,
            },
        };
        await documentClient.update(documentClientParams).promise();

        response = {
            statusCode: 204,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                Message: `${body.email}'s position is updated to ${body.position}.`,
            }),
        };
    } catch (exception) {
        console.error(exception);

        response = {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ Message: exception }),
        };
    }
    return response;
};