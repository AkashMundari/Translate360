//API Start
const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "21317709f8mshf76800d620e30fdp179c4ejsnab0fef901ab0",
    "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
  },
  body: new URLSearchParams({
    from: "en",
    to: "hi",
    text: "hello world",
  }),
};

try {
  const response = fetch(url, options);
  const result = response.text;
  console.log(result);
} catch (error) {
  console.error(error);
}
