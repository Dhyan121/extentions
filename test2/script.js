window.onload = function () {
  const colorBox = document.getElementById("colorBox");
  const quoteBox = document.getElementById("quoteBox");
  const clockBox = document.getElementById("clockBox");

  const updateClock = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockBox.innerText = `${hours}:${minutes}:${seconds} \n ${now.toDateString()}`;
  };

  setInterval(function () {
    colorBox.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    //API
    fetch("https://api.api-ninjas.com/v1/quotes?category=art", {
      headers: {
        "X-Api-Key": "vi9IHoZr+9QASaKk+LODkA==WHzxKMKWvcwlD5PT",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]?.quote);
        quoteBox.innerText = data[0]?.quote;
      })
      .catch((err) => {
        console.log(err);
      });
    updateClock();
  }, 1000);
};
