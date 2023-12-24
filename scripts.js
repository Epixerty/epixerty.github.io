// The URL you provided
const apiUrl = "https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=1373566627&size=420x420&format=Png&isCircular=false";

// Reference to the div where the image will be displayed
const imageEmbed = document.getElementById("imageEmbed");

// Make an HTTP GET request
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the imageUrl from the JSON response
    const imageUrl = data.data[0].imageUrl;
    
    // Create an img element
    const imgElement = document.createElement("img");
    
    // Set the src attribute of the img element to the obtained imageUrl
    imgElement.src = imageUrl;
    
    // Append the img element to the imageEmbed div
    imageEmbed.appendChild(imgElement);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
