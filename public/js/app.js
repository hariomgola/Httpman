const bindInputsHBS = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");
    const methodSelect = document.getElementById("methodSelect");
    const jsonInput = document.getElementById("jsonInput");
    const headersInput = document.getElementById("headersInput"); // Added headersInput
    const urlInput = document.getElementById("urlInput");

    // When the Send button is clicked
    sendButton.addEventListener("click", function () {
      const selectedMethod = methodSelect.value;
      const jsonBody = jsonInput.value ? JSON.parse(jsonInput.value) : null; // Convert to JSON object if exists
      const url = urlInput.value;
      const headersBody = headersInput.value
        ? JSON.parse(headersInput.value)
        : {}; // Parse headers JSON if provided

      const inputFromUser = {
        httpMethord: selectedMethod,
        url: url,
        json: jsonBody,
        headers: headersBody, // Include headers
      };
      console.log("|> Input from user\n", inputFromUser);
      makeApiCall(selectedMethod, url, jsonBody, headersBody); // Pass headers to the makeApiCall function
    });
  });
};

const makeApiCall = (method, url, jsonBody, headersBody) => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...headersBody, // Merge custom headers with the default Content-Type
    },
  };

  // Handle the body for POST, PUT requests
  if (method === "POST" || method === "PUT" || method === "DELETE") {
    options.body = JSON.stringify({
      url: url,
      jsonBody: jsonBody || {}, // send an empty object if jsonBody is null
    });
  } else if (method === "GET") {
    // For GET, pass the URL as a query parameter
    url = `http://localhost:1000/api/${method.toLowerCase()}?url=${encodeURIComponent(
      url
    )}`;
  }

  // Send the fetch request to the correct endpoint based on method
  fetch(`http://localhost:1000/api/${method.toLowerCase()}`, options)
    .then((response) => response.json())
    .then((data) => {
      windowOpeningMechnism(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      console.error(error);
    });
};

const windowOpeningMechnism = (data) => {
  const newWindow = window.open("", "_blank");
  newWindow.document.body.innerHTML = `
    <html>
        <head><title>JSON Data</title></head>
        <body>
            <h1>JSON Data</h1>
            <pre>${data}</pre>
        </body>
    </html>
  `;
};

(function () {
  bindInputsHBS();
})();
