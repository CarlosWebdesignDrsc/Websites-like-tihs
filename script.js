document.getElementById("kontaktBtn").addEventListener("click", () => {
  const email = "carlosdrescher1@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    const btn = document.getElementById("kontaktBtn");
    btn.textContent = "E-Mail kopiert ✅";
    btn.style.backgroundColor = "#2ecc71";

    setTimeout(() => {
      btn.textContent = "E-Mail kopieren";
      btn.style.backgroundColor = "#4dabf7";
    }, 3000);
  });
});
