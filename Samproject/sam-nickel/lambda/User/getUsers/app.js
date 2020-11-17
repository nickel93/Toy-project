const userPoolId = "ap-northeast-2_Bkxn8C0JS";
var AWS = require("aws-sdk");
var cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    console.log(JSON.stringify(event, null, 2));
    let response = {};
    const group = event.pathParameters.id;
    // const body = JSON.parse(event.body);

    try {
        let users = [];

        var params = {
            GroupName: group,
            UserPoolId: userPoolId,
            //   Limit: 'NUMBER_VALUE'
        };
        const tempUsers = await cognito.listUsersInGroup(params).promise();
        users = tempUsers.Users.map((user) => {
            const tempData = user.Attributes.filter((attr) =>
                [
                    "sub",
                    "email",
                    "given_name",
                    "family_name",
                    "custom:position",
                ].includes(attr.Name)
            );
            const data = tempData.reduce(
                (obj, item) => ({
                    ...obj,
                    [item.Name]: item.Value,
                }),
                {}
            );
            return data;
        });
        // console.log(">>>>", users)

        response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(users),
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