const button = document.querySelector(".button");
const apiKey = "AIzaSyDM4b8GRIsIe7_30Fx8kj3A7uV0dBkEs-o";
let token = "";
const user = {
  email: "",
  password: "",
};
register.addEventListener("submit", registerUser);
register.addEventListener("input", userHandleData);
button.addEventListener("click", addProduct);
async function registerUser(e) {
  e.preventDefault();
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    user
  );
  token = response.data.idToken;
  localStorage.setItem("token", JSON.stringify(token));
  const userData = {
    id: response.data.localId,
    createAt: Date.now(),
    email: response.data.email,
    favorites: ["asildkashgdyughb21414", "lksauawsjdhaiduwkda123"],
    adv: ["sadsadasdsadg", "asdsajkdhasjkdhaskdjhsa"],
  };
  axios.post(`https://salletron.firebaseio.com/users.json?auth=${token}`, {
    ...userData,
  });
}
function userHandleData(e) {
  user[e.target.name] = e.target.value;
}
function addProduct() {
  const token = JSON.parse(localStorage.getItem("token"));
  const product = {
    categories: "proasdperty",
    name: "TownHouse 2",
    description: "Jashashsaaaa",
    price: 120000,
    images: ["sadasdsasdadasd", "asdkassaddkgsahd", "asdlkasdauwdhbawa"],
  };
  axios.post(
    `https://salletron.firebaseio.com/products/change.json?auth=${token}`,
    {
      ...product,
    }
  );
}
function addCategories() {
  const categories = [
    "property",
    "transport",
    "job",
    "electronics",
    "services",
    "sport",
    "free",
    "change",
  ];
  axios.post(`https://salletron.firebaseio.com/categories.json?auth=${token}`, {
    ...categories,
  });
}
async function getProduct() {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios.get(
    `https://salletron.firebaseio.com/products.json`
  );
  console.log(response);
}
