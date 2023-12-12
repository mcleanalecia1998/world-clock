function updateTime() {
  // LA
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Seoul
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDateElement = seoulElement.querySelector(".date");
    let seoulTimeElement = seoulElement.querySelector(".time");
    let seoulTime = moment().tz("Asia/Seoul");

    seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
    seoulTimeElement.innerHTML = seoulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  let citiesSelectElement = document.querySelector("#cities");
  citiesSelectElement.innerHTML = `
  <div class="city">
    <div>
        <h2> ${cityName}</h2>
        <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss "
                )}<small>${cityTime.format("A")}</small></div>
            </div>
            <a href="index.html"> All cities</a>
            `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#select");
citiesSelectElement.addEventListener("change", updateCity);
