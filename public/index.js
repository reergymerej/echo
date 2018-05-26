// This is an IIFE. https://en.wikipedia.org/wiki/Immediately-invoked_function_expression<Paste>
(function () {
  // This is where you do your magic.  This JS will be fetched by index.html and
  // procesed on the client (the web browser).
  console.log('Hey, Trey!')

  // Here's what we want to do:

  // Add a listener for when the form is submitted.
  // Don't use jQuery.  Use native DOM events.  It will give you a better
  // understanding.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

  // When the form is submitted, send the value to the server.
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
  // hint: use GET to get the result from the server
  // example: http://localhost:3000/echo?value=hello

  // When the server responds, parse the response.

  // Show the response in the DOM so the user can see.

})()
