const errormiddlewre = (err, req, res, next) => {
    res.status(500).send({message: 'something went wrong', success: false, err});
};
export default errormiddlewre