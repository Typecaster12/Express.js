// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT); // =>  this is the way to manually validation of env
//as node always treat .env as string or undefined;
//so in case of port number port env must be number;

//upper vailidation using ZOD
import { z } from "zod";
const envSchema = z.object({
    //port number must be int, positive;
    //z.coerce.number() => convert "3000" to 3000(number);
    PORT: z.coerce.number().int().positive()
});

//parse is good option, but for more easy we can use safeParse;
// const env = envSchema.parse(process.env);

//safePare will give us object containing everything like whats the error and the data itself etc;
//where in .parse is any exception occures? we have to manually handle it with try,catch;
const { data, error, success } = envSchema.safeParse(process.env);
console.log(data) // => object containing PORT and its value(in our case, 3000);
export const PORT = data.PORT;