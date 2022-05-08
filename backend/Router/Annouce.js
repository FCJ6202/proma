const express = require('express');
const router = express.Router();
const annouce = require('../Modals/Announcement');
const repo = require('../Modals/Repo');
const user = require('../Modals/User');
const { body, validationResult } = require('express-validator');
const fetchData = require('../middleware/fetchData');

const CheckCredential = (CreaterUserId,RepoData) => {
    const Admin = RepoData.Admin;
    var Check = false;

    for(var i=0;i<Admin.length;i++){
        // console.log(CreaterUserId);
        // console.log(Admin[i]);
        if(Admin[i] === CreaterUserId){
            console.log("Yes")
            Check = true;
        }
    }

    return Check;
}

router.post('/create/:RepoId',fetchData, [body('text', 'please input valid text').isLength({ min: 5 }),
body('Type', 'please enter atleast 4 length type').isLength({ min: 4 })] ,async (req,res) => {
    // checking validation of request(req) which was send by user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("error");
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {text,Type} = req.body
        const CreaterUserId = req.UserData.id;
        const CreaterData = await user.findById(CreaterUserId);
        const RepoData  = await repo.findById(req.params.RepoId);

        // If user not a admin then he can't annoucement this repo
        //console.log("kaxjax -> " + await CheckCredential(CreaterUserId,RepoData))
        if(!CheckCredential(CreaterUserId,RepoData)){
            return res.status(400).json({success : false,error : "Invalid Credentials"});
        }

        const RepoId  = req.params.RepoId;

        const annouceData = new annouce({
            RepoId,text,CreaterName : CreaterData.name,CreaterUserId,Type
        })

        // Update Annouce Id in Repo Database
        RepoData.Annoucement.push(annouceData.id);
        repo.findByIdAndUpdate(RepoId,RepoData,(err,docs) =>{
            if(err){
                return res.status(400).json({success : false,error : "There is no updation in annoucement in repository"});
            }else{
                console.log(docs);
            }
        })

        annouceData.save();

        res.json(annouceData);

    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})

module.exports = router;