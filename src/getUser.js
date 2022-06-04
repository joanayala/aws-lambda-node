const AWS = require('aws-sdk');

const getUser = async (event) => {
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters

        const result = await dynamodb.get({
            TableName: 'Portfolio',
            Key: {
                id
            }
        }).promise()

        const user = result.Item

        return {
            status: 200,
            body: user
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUser
}