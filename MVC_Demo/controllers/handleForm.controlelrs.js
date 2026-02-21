import { getUsers } from "../models/form.models"
import { addUsers } from "../models/form.models"

const handleForm = (req, res) => {
    const { username, age } = req.body;
    //update the users;
    addUsers({ username, age });

    res.send(`
        <h3>User Added!</h3>
        <pre>${JSON.stringify(getUsers(), null, 2)}</pre>
        <a href="/home/form">Go Back</a>
    `);
}

export default handleForm;