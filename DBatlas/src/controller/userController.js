import userModel from "../models/user.model.js";

export const userReg = async (req, res) => {
    try {
        //take input from user;
        const { userName, userAge, userDescription } = req.body; //userName, userAge, userDescription,
        console.log(userName)
        console.log(userAge)
        console.log(userDescription)
        await userModel.create({ //C operation of database;
            userName: userName,
            userAge: userAge,
            userDescription: userDescription
        });

        res.status(201).json({
            status: "True",
            message: "User Registered Sucessfully..",
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            errMessage: err.message,
        });
    }
}

export const getRegUsers = async (req, res) => {
    try {
        //so this is not just normal get request, here we are dealing with database,
        const users = await userModel.find(); //to get all the users from ourr table, we use .find()
        //.find() always returns, array;
        //responsible for fetching "All" the users;

        res.status(200).json({
            status: "Success",
            data: users,
        });
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            errMessage: err.message,
        });
    }
}

export const getSingleUser = async (req, res) => {
    try {
        //to find one user, we user .findOne();
        //this will return object only(single);
        //and require some condition to find that perticular user;
        const singleUser = await userModel.findOne({
            userName: "Harsh"
        });

        res.status(200).json({
            status: "Success",
            singleUser
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            errMessage: err.message,
        });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        await userModel.findOneAndDelete({
            _id: id
        });

        res.status(200).json({
            message: "user deleted Sucessfully"
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            errMessage: err.message,
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const des = req.body.userDescription;

        //takes, two object
        //first asks on which basis you want to find user;
        //second one asks the new data;
        await userModel.findOneAndUpdate({ _id: id }, { userDescription: des });
        res.status(200).json({
            status: "Success",
            message: "User Got updated.."
        })
    } catch (err) {
        res.status(500).json({
            status: "Failed",
            errMessage: err.message,
        });
    }
}
