const { v4 } = require('uuid');
const AWS = require('aws-sdk');
const middy = require('@middy/core');
const jsonBodyParser = require('@middy/http-json-body-parser');

const addUser = async(event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { 
    description, 
    image_url, 
    twitter_user_name,
    title,
    address,
    email,
    experience,
    experience_summary,
    image_path,
    last_names,
    name,
    names,
    phone,
    twitter_user,
    twitter_user_id,
    user_id,
    zip_code 
  } = event.body;
  
  const id = v4();

  const newTask = {
    id,
    description, 
    image_url, 
    twitter_user_name,
    title,
    address,
    email,
    experience,
    experience_summary,
    image_path,
    last_names,
    name,
    names,
    phone,
    twitter_user,
    twitter_user_id,
    user_id,
    zip_code
  };

  await dynamodb.put({
    TableName: 'Portfolio',
    Item: newTask
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };

};

module.exports = {
  addUser: middy(addUser).use(jsonBodyParser()),
};