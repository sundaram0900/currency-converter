# currency-converter
Here I have made a Chrome extension of currency converter with some primary currency
there will be an extended JS code in the JS file, but it is commented due to some typo errors and new versions, so don't mind them.

And now about the steps and detail explanation about the JS code 
_______________________________________________________________________________________________________________________________


1. The code starts by adding an event listener to the `convert` button. When the button is clicked, the function inside the event listener is executed.

2. Inside the function, it first retrieves the input values from the `amount` and `currency` fields.

3. It then constructs a URL by appending the selected currency to the base API URL.

4. Next, it sends a request to the API using the `fetch` function. The API key is included in the request headers.

5. If the request is successful, it converts the response to JSON format using `Response.json()`.

6. It then extracts the exchange rate from the response data and calculates the converted amount by multiplying the input amount by the exchange rate.

7. The result is then displayed in the `result` field in this format: `{amount} {currency} = {converted amount} USD`.

8. If there's an error during any part of this process (for example, if the API request fails), it catches that error and displays an error message in the `result` field.

9. Hope you Understand.
