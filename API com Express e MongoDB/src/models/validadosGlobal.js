import moongoose from "mongoose";

moongose.Schema.Types.String.set("validate", {
    validator: (valor) => valor !== "",
    message: ({ path }) => `O campo '${path}' foi fornecido em branco.`
});