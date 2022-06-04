const AWS = require('aws-sdk');

const deleteUser = async event => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb.delete({
        TableName: 'Portfolio',
        Key: { id },

    }).promise()

    return {
        status: 200,
        body: JSON.stringify({
            message: 'User has been deleted!'
        })
    }    
}

module.exports = {
    deleteUser
}