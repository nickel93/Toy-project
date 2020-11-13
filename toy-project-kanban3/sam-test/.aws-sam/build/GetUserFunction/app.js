const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient({ region: 'ap-northeast-2' });

const jwtDecode = require('jwt-decode');

exports.handler = async (event) => {
    console.info('received:', event);

    const { sub: id } = jwtDecode(event.headers.Authorization);

    var params = {
        TableName: 'LabnoteUsers',
        Key: {
            id,
        },
    };
    const data = await docClient.get(params).promise();
    const result = data.Item;

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ result: result.position }),
    };

    console.log(response);
    return response;
};