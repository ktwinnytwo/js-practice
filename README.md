# js-practice
different exercises
This file contains different practice exercises in each branch



HTTP Headers

- An additional way of passing information with a request and a response
- kind of like meta data, add-on details to your requests
- The response might come with headers as well
- some APIs require custom headers (example: Dad Jokes API)
- It wont send you a JSON response unless you specify it in the header
Example: 
Accepted "accept" headers:
text/html :  HTML response (default response)
application/JSON :  JSON response
text/plain : plain text response
No way to pass this header in the URL itself. Must be through AJAX

in the hopscotch parameters: key: accept / value: application/json
