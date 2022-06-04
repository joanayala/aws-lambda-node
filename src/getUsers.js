const AWS = require('aws-sdk');

const getUsers = async (event) => {
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: 'Portfolio'
        }).promise()

        const users = result.Items

        return {
            status: 200,
            body: users
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers
}