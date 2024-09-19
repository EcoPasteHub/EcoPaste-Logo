window.onload = () => {
  const downloadElement = document.querySelector(".download");

  downloadElement.addEventListener("click", async () => {
    const { origin } = location;

    for (const file of ["EcoPaste-logo.png", "EcoPaste-tray.png"]) {
      const link = document.createElement("a");

      link.href = `${origin}/img/${file}`;

      link.download = file;

      link.click();
    }
  });
};
