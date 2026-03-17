// 1 - Instalação
console.log(axios)

// 2 - primeiro request
const getData = async () => {
    try {

        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

getData();

// 3 - imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");

        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("h3");

        emailElement.textContent = user.email;

        div.appendChild(emailElement);

        const usernameElement = document.createElement("p");

        usernameElement.textContent = user.username;

        div.appendChild(usernameElement);

        const phoneElement = document.createElement("p");

        phoneElement.textContent = user.phone;

        div.appendChild(phoneElement);
        
        const companyElement = document.createElement("p");

        companyElement.textContent = user.company.name;

        div.appendChild(companyElement);

        const addressElement = document.createElement("p");

        addressElement.textContent = user.address.city;

        div.appendChild(addressElement);

        const websiteElement = document.createElement("a");

        websiteElement.textContent = user.website;

        div.appendChild(websiteElement);

        container.appendChild(div);
    });
};

printData();