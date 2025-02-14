const bindInputsHBS = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");
    const methodSelect = document.getElementById("methodSelect");
    const jsonInput = document.getElementById("jsonInput");
    const responseDisplay = document.getElementById("responseDisplay");
    const urlInput = document.getElementById("urlInput");

    // When the Send button is clicked
    sendButton.addEventListener("click", function () {
      const selectedMethod = methodSelect.value;
      const jsonBody = jsonInput.value;
      const url = urlInput.value;

      const inputFromUser = {
        httpMethord: selectedMethod,
        url: url,
        json: jsonBody,
      };
      console.log("|> Input from user\n", inputFromUser);
      responseDisplay.value = JSON.stringify(inputFromUser, null, 2);
      windowOpeningMechnism(inputFromUser);
    });
  });
};

const windowOpeningMechnism = (data) => {
  const newWindow = window.open("", "_blank");
  newWindow.document.body.innerHTML = `
  <html>
      <head><title>JSON Data</title></head>
      <body>
          <h1>JSON Data</h1>
          <pre>${SON.stringify(data, null, 2)}</pre>
      </body>
  </html>
`;
};

(function () {
  bindInputsHBS();
})();
