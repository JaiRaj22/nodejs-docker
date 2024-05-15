import jobsmodel from "../models/jobsmodel.js"

export const createjobcontroller = async (req, res) => {
    const {company, position} = req.body
    if(!company || !position){
        res.status(400).send('company and position are required')
    }
    req.body.createdBy = req.user.userId
    const job = await jobsmodel.create(req.body)
    res.status(201).json({ job });
};

export const getalljobscontroller = async (req, res) => {
    const jobs = await jobsmodel.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(200).json({ jobs });
};
