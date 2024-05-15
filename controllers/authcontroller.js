import usermodel from "../models/usermodel.js"

export const registercontroller = async(req,res,next) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            next('enter name, passoword and email')
        }
        const existinguser = await usermodel.findOne({email})
        if(existinguser){
            next('user already exists')
        }
        const user = await usermodel.create({name, email, password})
        const token = user.createJWT()

        res.status(201).send({
            sucess:true,
            message:'user created successfully',
            user,
            token,
        })
    } catch (error) {
        next(error)
    }
}

export const logincontroller = async(req,res,next) => {
    const {email, password} = req.body
    if(!email || !password){
        next('enter email and password')
}
const user = await usermodel.findOne({email})
if(!user){
    next('invalid email or password')
}
const ismatch = await user.comparePassword(password)
if(!ismatch){
    next('invalid email or password')
}
const token = user.createJWT()
res.status(200).send({
    sucess:true,
    message:'user logged in successfully',
    user,
    token,
})
}