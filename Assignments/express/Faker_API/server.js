//In your server.js file, Import express and faker
const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const PORT = 1234;

//== MIDDLEWARE ===
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//Create 2 classes: User, Company with the same attributes as listed above
class User {
    constructor(password, email, lastName, firstName, user_id){
        this.password = password;
        this.email = email;
        this.lastName = lastName;
        this.firstName = firstName;
        this.user_id = user_id;
    }
}


class Company {
    constructor(company_id, company_name, address){
        this.company_id = company_id;
        this.company_name = company_name;
        this.address = address;
    }
}


const data = {
    user: [],
    company: []
}

app.post("/api/users/new", (req, res) => {
    const newUser = new User(
        faker.internet.password(),
        faker.internet.email(),
        faker.name.lastName(),
        faker.name.firstName(),
        faker.datatype.uuid()
    )
    
    res.json(newUser);
    data.user.push(newUser)
})

app.post("/api/companies/new", (req, res) => {
    const newCompany = new Company(
        faker.datatype.uuid(),
        faker.company.name(),
        `${faker.address.street()} ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()} ${faker.address.country()}`
    )
    
    res.json(newCompany);
    data.company.push(newCompany);
})

app.get("/api/user/company", (req, res) =>{
    res.json(data)
})




// ! starts the server
//// ! always at the bottom of our app
app.listen(PORT, () => console.log(`>> SERVER is up on port ${PORT} and is listening for REQuest to RESpond to`))