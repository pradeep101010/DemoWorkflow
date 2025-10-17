module.exports = async function (context, req) {
  context.log('HTTP trigger function processed a request.');

  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? `Hello, ${name}. This is your demo Node.js Function App running on Azure!`
    : "Hello! Pass a name in the query string or request body for a personalized response.";

  context.res = {
    status: 200,
    body: responseMessage
  };
};
