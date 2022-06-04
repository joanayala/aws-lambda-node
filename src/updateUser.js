const AWS = require('aws-sdk');

const updateUser = async(event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const { description, experience_summary } = JSON.parse(event.body);

  await dynamodb.update({
      TableName: 'Portfolio',
      Key: { id },
      UpdateExpression: 'set description = :description',
      ExpressionAttributeValues: {
          ':description': description
      },
      ReturnValues: 'ALL_NEW'
  }).promise()

  return {
      status: 200,
      body: JSON.stringify({
          message: 'Task updated succesfully!',
      })
  }

};

module.exports = {
    updateUser,
};