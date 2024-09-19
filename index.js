window.onload = () => {
  const downloadElement = document.querySelector(".download");

  downloadElement.addEventListener("click", async () => {
    const { origin } = location;

    const imgs = [
      "EcoPaste-logo.png",
      "EcoPaste-tray.png",
      "EcoPaste-logo-BigSur.png",
    ];

    for (const img of imgs) {
      const link = document.createElement("a");

      link.href = `${origin}/img/${img}`;

      link.download = img;

      link.click();
    }
  });
};
