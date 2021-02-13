function ukazOdpoved(odpovedID) {
    let odpovedDiv = document.getElementById(odpovedID);
    if (odpovedDiv.style.display === "none") {
      odpovedDiv.style.display = "block";
    } else {
      odpovedDiv.style.display = "none";
    }
  }