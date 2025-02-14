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
    });
  });
};

(function () {
  bindInputsHBS();
})();
