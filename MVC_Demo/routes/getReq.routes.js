import { Router } from "express";
import form from "../controllers/renderForm.controllers";
import handleForm from "../controllers/handleForm.controlelrs";

const demoData = Router();

demoData.get("/form", form); //to read the data(form) thats why get request;
demoData.post("/submit", handleForm); //to create new data we use post request;

export default demoData;