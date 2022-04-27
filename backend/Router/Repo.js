const express = require('express');
const router = express.Router();
const repo = require('../Modals/Repo');
const { body, validationResult } = require('express-validator');
const fetchData = require('../middleware/fetchData');


// Router 1 : fetch all notes after login
router.get('/fetchallrepos', fetchData, async (req, res) => {
    console.log("Hello fetch notes page");

    try {
        const user = req.UserData.id;
        const UserRepos = await repo.find({ user });
        res.send(UserRepos);
    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})


// Router 2 :- After login user can create a classroom
router.post('/createRepo',fetchData,[body('repoName', 'please input valid title').isLength({ min: 1 }),
body('createrName', 'please enter atleast 4 length password').isLength({ min: 4 })], async (req, res) => {
    console.log("Hello notes page");
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
            repoName, createrName
        })
        repoData.save();
        res.json(repoData);
    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})

module.exports = router;