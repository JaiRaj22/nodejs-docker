export const testpostcontroller = (req, res) => {
    const {name} = req.body
    res.status(200).send(`hello ${name}`)
};