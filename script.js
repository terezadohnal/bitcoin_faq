function ukazOdpoved(odpovedID, sipkaID) {
    let odpovedDiv = document.getElementById(odpovedID);
    let sipka = document.getElementById(sipkaID);

    if (sipka.src.match("img/arrow_down_white.svg")) {
      odpovedDiv.style.display = "block";
      sipka.src = "img/arrow_up_white.svg";
      console.log("prvni");
    } else {
      odpovedDiv.style.display = "none";
      sipka.src = "img/arrow_down_white.svg";
      console.log("druhy");
    }

  }