import request from 'request';

var program = {
    script : "public class Main { public static void main(String[] args) { System.out.println(\"Hello World\") } }",
    language: "java",
    versionIndex: "0",
    clientId: "76e614591b57d5f9f4efdd4f52a4c5b9",
    clientSecret:"952b79ba4427e534f81782cf597a354d23c428d9136fd9fcba7ce6b9a90069a7"
};
request({
    url: 'https://api.jdoodle.com/v1/execute',
    method: "POST",
    json: program
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
})