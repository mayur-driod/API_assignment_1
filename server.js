// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});

app.get('/assistant/greet', (req, res) => {
  const name = req.query.name;
  const date = new Date();
  const day = date.getDay();
  let dayMessage = '';
  let WelcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
  switch(day){
    case 1:
      dayMessage = "Happy Monday! Start your week with energy!";
      break;
    case 5:
      dayMessage = "It's Friday! The weekend is near!";
      break;
    default:
      dayMessage = "Have a wonderful day!";
  }

  res.json({
    welcomeMessage: WelcomeMessage,
    dayMessage: dayMessage
  })

});