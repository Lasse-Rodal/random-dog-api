document.getElementById("loadDog").addEventListener("click", async () => {
    try {
      // Fetch a random dog image
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
  
      // Display it
      const container = document.getElementById("dogContainer");
      container.innerHTML = `<img src="${data.message}" alt="Cute doggo" class="mx-auto rounded-lg shadow-md max-w-xs" />`;
    } catch (error) {
      console.error("❌ Error fetching dog image:", error);
    }
  });