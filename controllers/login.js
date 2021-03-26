const LoginDbSchema = require('../models/login')

const getUser = async(req,res) => {
      try{
            const loginDetails = await LoginDbSchema.find()
            res.json(loginDetails)
      }
      catch(err){
            res.send('Error' + err)
      }
};

const getUserById = async(req, res) => {
      try{
            const loginDetail = await LoginDbSchema.findById(req.params.id)
            res.json(loginDetail )
      }
      catch(err){
            res.send('Error' + err)
      }
};

const postUser = async(req, res) =>{
      const loginData = new LoginDbSchema({
            username: req.body.username,
            password: req.body.password
      });
      try{
            const l1 = await loginData.save()
            res.json(l1)
      }
      catch{
            res.send('Error')
      }
}

const updateUser = async(req, res)=>{
      try{
            const login = await LoginDbSchema.findById(req.params.id)
            login.username = req.body.username
            login.password = req.body.password
            const l1 = await login.save()
            res.json(l1)
      }
      catch(err){
            res.send('Error'+ err)
      }
}

const deleteUser = async(req, res)=>{
      try{
            const deleteLogin = await LoginDbSchema.remove({_id: req.params.id});
            res.json(deleteLogin)
      }
      catch(err){
            res.json('Error' + err)
      }
}

module.exports = { getUser, getUserById, postUser, updateUser, deleteUser }