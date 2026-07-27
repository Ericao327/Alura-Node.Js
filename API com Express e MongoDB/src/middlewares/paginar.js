import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

function paginar(req, res, next) {
    try {
    
    let { limite = 5, pagina = 1, odenacao = "_id:-1" } = req.query;

        let [campoOdenacao, ordem] = odenacao.split(":");

        limite = parseInt(limite);
        pagina = parseInt(pagina);
        ordem = parseInt(ordem);

        const resultado = req.resultado;

        if (limite > 0 && pagina > 0) {
        const resultadoPaginado = await livros.find()
          .sort({ [campoOrdenacao]: ordem })
          .skip((pagina - 1) * limite)
          .limit(limite)
          .exec();

          res.status(200).json(livrosResultado);
        } else {
        next(new RequisicaoIncorreta());
        }
    } catch (erro) {
        next(erro);
    }
}

export default paginar;