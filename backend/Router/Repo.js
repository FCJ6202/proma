const express = require('express');
const router = express.Router();
const repo = require('../Modals/Repo');
const user = require('../Modals/User');
const { body, validationResult } = require('express-validator');
const fetchData = require('../middleware/fetchData');


// Router 1 : fetch all notes after login
router.get('/fetchallrepos', fetchData, async (req, res) => {

    try {
        const userId = req.UserData.id;
        console.log(userId);
        const UserRepos = await repo.find({ createrId : userId });
        res.send(UserRepos);
    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})


// Router 2 :- After login user can create a classroom
router.post('/createRepo',fetchData,[body('repoName', 'please input valid title').isLength({ min: 1 }),
body('createrName', 'please enter atleast 4 length password').isLength({ min: 4 })], async (req, res) => {
    //console.log("Hello notes page");
    // checking validation of request(req) which was send by user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("error");
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { repoName, createrName} = req.body;
        const Data = await repo.findOne({repoName,createrName})
        if(Data){
            return res.json("That repoName and createrName choose please choose different one of them :)")
        }

        const repoData = await new repo({
            createrId: req.UserData.id,
            repoName, createrName,
            Admin : [req.UserData.id]
        })
        const userdata = await user.findById(req.UserData.id);
        //Update the createRepo of the User because repo was create by this userId
        userdata.createRepo.push(repoData.id);
        user.findByIdAndUpdate(req.UserData.id,userdata,(err,docs)=>{
            if (err){
                console.log(err);
                return res.json({success : false,message : "Not updated in user repo details"});
            }
        })
        //console.log(userdata);
        repoData.save();
        res.json(repoData);
    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})

module.exports = router;