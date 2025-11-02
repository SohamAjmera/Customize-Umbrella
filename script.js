const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadInput = document.createElement("input");
const uploadText = document.getElementById("upload-text");
const uploadLoader = document.getElementById("upload-loader");
const uploadIcon = document.getElementById("upload-icon");
const removeLogoButton = document.getElementById("remove-logo");
const uploadedLogo = document.getElementById("uploaded-logo");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";

function showLoader() {
  loaderContainer.style.opacity = "1";
  umbrellaImage.style.opacity = "0";
  if (uploadedLogo.style.display === "block") {
    uploadedLogo.style.opacity = "0";
  }
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
  umbrellaImage.style.opacity = "1";
  if (uploadedLogo.style.display === "block") {
    uploadedLogo.style.opacity = "1";
  }
}

function showUploadLoader() {
  uploadLoader.style.display = "flex";
  uploadIcon.style.display = "none";
}

function hideUploadLoader() {
  uploadLoader.style.display = "none";
  uploadIcon.style.display = "block";
}

function showRemoveButton() {
  removeLogoButton.style.display = "block";
}

function hideRemoveButton() {
  removeLogoButton.style.display = "none";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  // Show upload loader immediately when file is selected
  showUploadLoader();
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    uploadedLogo.src = reader.result;
    
    // Show umbrella loader while placing logo on umbrella
    showLoader();
    
    // Simulate processing time for placing logo on umbrella
    setTimeout(() => {
      uploadedLogo.style.display = "block";
      umbrellaImage.style.zIndex = "-1";
      uploadText.textContent = file.name;
      
      // Hide umbrella loader after processing
      hideLoader();
      
      // Hide upload loader after processing is complete
      hideUploadLoader();
      
      // Show remove button
      showRemoveButton();
    }, 1500); // Adjust timing as needed
  };
}

function removeLogo() {
  // Reset to initial state
  uploadedLogo.style.display = "none";
  uploadedLogo.src = "";
  uploadText.textContent = "Upload Logo";
  umbrellaImage.style.zIndex = "0";
  
  // Hide remove button
  hideRemoveButton();
}

logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

removeLogoButton.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent triggering the upload button
  removeLogo();
});

blueThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    document.body.style.backgroundColor = "#C5E0DC";
    logoUploadButton.style.backgroundColor = "#0000FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Blue.png";
      hideLoader();
    }, 2500);
  });
});

yellowThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    document.body.style.backgroundColor = "#F7E09E";
    logoUploadButton.style.backgroundColor = "#FFA500";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Yello.png";
      hideLoader();
    }, 2000);
  }, 0);
});

pinkThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    document.body.style.backgroundColor = "#F4C4C4";
    logoUploadButton.style.backgroundColor = "#FF00FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Pink.png";
      hideLoader();
    }, 2000);
  }, 0);
});
