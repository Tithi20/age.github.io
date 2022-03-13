const form = document.querySelector("#form");
const ages = document.querySelector("#ages");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searched = form.elements.query.value;

  //axios

  const config = {
    params: {
      name: searched,
    },
  };
  const url = "https://api.agify.io/";
  const res = await axios.get(url, config);
  console.log(res.data.age);
  const age = res.data.age;
  const newLi = document.createElement("li");
  newLi.append(`${searched} - ${age} `);
  ages.append(newLi);
});
