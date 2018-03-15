exports.hello = function (req, res) {
    const name = req.params.name || "Alguien";
    res.send({ msg: `Hola ${name}` });
}