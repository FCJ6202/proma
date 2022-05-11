const express = require('express');
const router = express.Router();
const user = require('../Modals/User');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const fetchData = require('../middleware/fetchData');
var jwt = require('jsonwebtoken');

const JWT_secret = "iamironman";

//router 1 :  ye "api/auth/create" page ka work hai jaha user register karega
router.post('/create', [body('email', 'please input valid email id').isEmail(),
body('name', 'please input valid name').isLength({ min: 3 }),
body('password', 'please enter atleast 4 length password').isLength({ min: 4 })], async (req, res) => {
  //console.log(req.body);
  

  // checking validation of request(req) which was send by user
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("error");
    return res.status(400).send({ success,errors: errors.array() });
  }

  try {
    // for encrpt password
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt); // hash will contain encrpt password

    const UserData = await user.create({
      name: req.body.name,
      email: req.body.email,
      password: hash
    })

    data = {
      User: {
        id: UserData.id
      }
    }

    var token = jwt.sign(data, JWT_secret);
    res.send({success : true,token});
    console.log(token);
  } catch (error) {
    console.log(error)
    res.send({ error: error.message });
  }
})

// router 2 :  ye "api/auth/login" page ka work hai jaha user login karega after registretion
router.post('/login', [body('email', 'please input valid email id').isEmail(),
body('password', 'please enter atleast 4 length password').isLength({ min: 1 })], async (req, res) => {
  // checking validation of request(req) which was send by user
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("error");
    return res.status(400).json({ success,errors: errors.array() });
  }

  try {
    const { email, password } = req.body; // user se email ans password liye
    const UserData = await user.findOne({ email });
    if (!UserData) {
      res.status(400).json({ success,error: "please enter valid login credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, UserData.password);
    if (!passwordCompare) {
      res.status(400).json({ success,error: "please enter valid login credentials" });
    }

    data = {
      User: {
        id: UserData.id
      }
    }

    var authToken = jwt.sign(data, JWT_secret); // generate token

    res.send({ success : true, authToken });

    console.log(authToken);

  } catch (error) {
    console.log(error)
    res.json({ success : false,error: error.message });
  }

});

// router 3 :  ye "api/auth/userdata" page ka work hai jaha user login karega after login
router.post('/userdata', fetchData, async (req, res) => {
    try {
      const id = req.UserData.id;
      const userData = await user.findById(id).select("-password");
      res.json(userData);
    } catch (error) {
      console.log(error)
      res.json({error: error.message });
    }
  })


  router.post('/userdata/:UserId', fetchData, async (req, res) => {
    try {
      const id = req.params.UserId;
      const userData = await user.findById(id).select("-password");
      res.json(userData);
    } catch (error) {
      console.log(error)
      res.json({error: error.message });
    }
  })

module.exports = router;