// const amount = document.getElementById("amount");
// const currency = document.getElementById("Currency");

// const convert = document.getElementById("convert");

// const result = document.getElementById("result");

// const apiKey = "";
// const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_ ";
// convert.addEventListener("click", () => {
//   const amountTotal = amount.value;
//   const currencyTotal = currency.value;
//   const url = apiUrl + currencyTotal;

//   fetch(url, {
//     headers: {
//       "X-API-KEY": apiKey,
//     },
//   })
//     .then((Response) => Response.json())
//     .then((data) => {
//       const rate = data.exchange_rate;
//       console.log("rate", rate);
//       const resultPrice = amountTotal * rate;
//       result.innerHTML =
//         "${amount} ${currency} = ${resultPrice.toFixed(2)} USD";
//     })

//     .catch((Error) => {
//       console.error("Request failed", Error);
//       result.innerHTML = "An error Occurred please try again after some time.";
//     });
// });

// const amount = document.getElementById("amount");
// const currency = document.getElementById("Currency");

// const convert = document.getElementById("convert");

// const result = document.getElementById("result");

// const apiKey = "";
// const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_ ";
// convert.addEventListener("click", () => {
//   const amountTotal = amount.value;
//   const currencyTotal = currency.value;
//   const url = apiUrl + currencyTotal;

//   fetch(url, {
//     headers: {
//       "X-API-KEY": apiKey,
//     },
//   })
//     .then((Response) => Response.json())
//     .then((data) => {
//       const rate = data.rate;
//       const calculationResult = amountTotal * rate;
//       result.innerHTML = `${amountTotal} ${currencyTotal} = ${calculationResult.toFixed(
//         3
//       )} RUPEE`;
//     })
//     .catch((Error) => {
//       console.error("Request failed", Error);
//       result.innerHTML = "An error occurred, please try again after some time.";
//     });
// });

const amount = document.getElementById("amount");
const currency = document.getElementById("Currency");

const convert = document.getElementById("convert");

const result = document.getElementById("result");

const apiKey = "";
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";
convert.addEventListener("click", () => {
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const url = apiUrl + currencyTotal;

  fetch(url, {
    headers: {
      "X-API-KEY": apiKey,
    },
  })
    .then((Response) => Response.json())
    .then((data) => {
      const rate = data.exchange_rate;
      console.log("rate", rate);
      const resultPrice = amountTotal * rate;
      result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(
        2
      )} USD`;
    })
    .catch((Error) => {
      console.error("Request failed", Error);
      result.innerHTML = "An error occurred, please try again after some time.";
    });
});
