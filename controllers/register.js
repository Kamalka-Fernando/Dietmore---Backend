const registerDbSchema = require('../models/register')

const registerUser = async(req, res) => {
      const registerData = new registerDbSchema({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
      });
      try {
            const r1 = await registerData.save()
            res.json(r1)
      }
      catch {
            res.send('Error')
      }
}

module.exports = { registerUser }