//form rendering logic is here;
const form = (req, res) => {
    res.send(`
        <h2>User Form</h2>
        <form action="/home/submit" method="POST">
            <input type="text" name="username" placeholder="Enter name" />
            <input type="number" name="age" placeholder="Enter age" />
            <button type="submit">Submit</button>
        </form>
    `);
}

export default form;