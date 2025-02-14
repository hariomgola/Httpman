// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  const jsonInput = document.getElementById("jsonInput");

  sendButton.addEventListener("click", function () {
    const jsonData = jsonInput.value;
    console.log("><><><><><><><><><><>")

    try {
      // Attempt to parse the JSON
      const parsedData = JSON.parse(jsonData);

      // Send the parsed data to the server
      sendJsonToServer(parsedData);
    } catch (e) {
      alert("Invalid JSON format. Please check your input.");
    }
  });

//   // Function to send the JSON data to the server (via Fetch API)
//   function sendJsonToServer(data) {
//     fetch("/process-json", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log("Server response:", responseData);
//         // You can handle the server response here
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }
});
