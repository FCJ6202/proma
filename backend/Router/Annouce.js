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
        res.json({ success : false,error: error.message });
    }
})


router.post('/fetchdata/:RepoId',fetchData ,async (req,res) => {
    // checking validation of request(req) which was send by user

    try {
        //const {text,Type} = req.body
        const userId = req.UserData.id;
        const CreaterData = await user.findById(userId);
        const RepoData  = await repo.findById(req.params.RepoId);

        var check = false;
        RepoData.Admin.map((data)=>{
            if(data == userId){
                check = true;
                //return res.status(400).json({success : false,error : "You are already a admin of this repository"});
            }
        })
        RepoData.Member.map((data) => {
            if(data == userId){
                check = true;
                //return res.status(400).json({success : false,error : "You are already a member of this repository"});
            }
        })

        if(!check){
            return res.status(400).json({success : false,error : "You are not a member og that class"});
        }

        check = false;
        CreaterData.createRepo.map((data) => {
            if(data == req.params.RepoId){
                check = true;
                //return res.status(400).json({success : false,error : "You joined that repository already"});
            }
        })
        CreaterData.joinRepo.map((data) => {
            if(data == req.params.RepoId){
                check = true;
                //return res.status(400).json({success : false,error : "You joined that repository already"});
            }
        })

        if(!check){
            return res.status(400).json({success : false,error : "There is some error in database"});
        }

        var AnnouceArray = [];

        for(var i=0;i<RepoData.Annoucement.length;i++){
                const temp = await annouce.findById(RepoData.Annoucement[i]);
                //console.log(temp)
                AnnouceArray.push(temp);
        }

        res.json(AnnouceArray);

    } catch (error) {
        console.log(error)
        res.json({ error: error.message });
    }
})

module.exports = router;