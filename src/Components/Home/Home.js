import React,{useState,useRef,useEffect} from 'react'
import Repo from './Repo'
import Navbar from "../Navbar"
export default function Home() {

    const close = useRef(null); // ye pop mai jo close button hai uskp click krne kr liye
    const FirstDetails = [
        {
            Id : 1,
            RepoName: "OOP",
            CreatorName: "O.P.Vyas"
        },
        {
            Id : 2,
            RepoName: "SE",
            CreatorName: "O.P.Vyas"
        },
        {
            Id : 3,
            RepoName: "DBMS",
            CreatorName: "O.P.Vyas"
        },
        {
            Id : 4,
            RepoName: "Data Structure",
            CreatorName: "O.P.Vyas"
        },
        {
            Id : 5,
            RepoName: "PPL",
            CreatorName: "O.P.Vyas"
        },
    ]// DataBase hume ye object dega
    const [RepoDetails, setRepoDetails] = useState([]); // ye Repo details hai particular user ka
    const [JoinRepoDetails, setJoinRepoDetails] = useState([]);

    const [repo, setrepo] = useState({   // ye Individual repo hai jisme repo and creter ka naam jayega
        RepoName : "",
        CreatorName : ""
    })
    const [code, setcode] = useState(""); // ye Repo details hai particular user ka

    const Handle = (e) => {
        setrepo({...repo,[e.target.id] : e.target.value.toString()});
    }
    const HandleCode = (e) => {
        setcode(e.target.value.toString());
    }

    const RepoDataById = async (RepoId) => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/repo/Repodata/${RepoId}`;
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //body: JSON.stringify({ repoName, createrName}) // body data type must match "Content-Type" header
        });
        const json = await response.json();

        return json;
    }

    const UserDetails = async () => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = "http://localhost:4000/u/auth/userdata";
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //body: JSON.stringify({ repoName, createrName}) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        return json;
    }

    const FillJoinRepoDetails = async () => { // All Repo Which is join by user
        const UserData = await UserDetails();
        JoinRepoDetails.length = 0;

        for(var i=0;i<UserData.joinRepo.length;i++){
            //console.log(i);
            const temp = await RepoDataById(UserData.joinRepo[i]);
            JoinRepoDetails.push(temp);
        }

        return JoinRepoDetails;
    }

    const AddRepo = async (repoName, createrName) => {
        const authToken = localStorage.getItem("token");
        console.log("Add" + authToken);
        const url = "http://localhost:4000/u/repo/createRepo";
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ repoName, createrName}) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log("Adding a new Repo");
        console.log(json);
        RepoDetails.push(json);
        setRepoDetails(RepoDetails);
      }

      const FetchJoinRepoCode = async () => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/repo/JoinRepo/${code}/1`;
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const json = await response.json();
      }


    const HandleSubmit = async() => { // this is for adding new repo by the user
        await AddRepo(repo.RepoName,repo.CreatorName);
        setrepo({
            RepoName : "",
            CreatorName : ""
        })
        close.current.click();
    }
    const HandleCodeSubmit = async(e) => { // this is for adding new repo by the user using code
        // await AddRepo(repo.RepoName,repo.CreatorName);
        console.log(e);
        await FetchJoinRepoCode();
        close.current.click();
        window.location.reload();
    }

    const HandleSubmitForJoin = async () => {
        console.log("JoinRepo");
    }

    const FetchData = async () => {
        const authToken = localStorage.getItem("token");
        const url = "http://localhost:4000/u/repo/fetchallrepos";
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        //console.log(json);
        setRepoDetails(json);
      }

    useEffect(async() => {
        const JoinRepoData =  await FillJoinRepoDetails();
        setJoinRepoDetails(JoinRepoData)
        await FetchData();
    },[])
    

    return (
        <>
            <Navbar />

            {/* <!-- Button trigger modal --> */}
            <button type="button" /*style={{ display: "none" }}*/ className="btn btn-primary" /*ref={ref}*/ data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Repository
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Repository</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputRepo" className="form-label">Repository Name</label>
                                <input type="text" className="form-control" required value={repo.RepoName} onChange={Handle} id="RepoName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCreator" className="form-label">Creator Name</label>
                                <input type="text" className="form-control" required value={repo.CreatorName} onChange={Handle} id="CreatorName" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={HandleSubmit} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Button trigger modal --> */}
            <button type="button" /*style={{ display: "none" }}*/ className="btn btn-primary" /*ref={ref}*/ data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Join Repository
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Join Repository</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputRepo" className="form-label">Repository Code</label>
                                <input type="text" className="form-control" required value={code} onChange={HandleCode} id="code" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={HandleCodeSubmit} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <h1 className='text-center'>Your Repository</h1>
                {/* There is user Repository which was he/she will create */}
                <div className="row">
                    {RepoDetails.map((data) => {
                        return (
                            <div className="col-md-4 my-3" key={data._id}>
                                <Repo RepoName={data.repoName} CreatorName={data.createrName} RepoId={data._id}/>
                            </div>
                        )
                    })}
                </div>
                <h1 className='text-center'>Joined Repository</h1>
                {/* There is Repository which was joined by this user but not created */}
                <div className="row">
                    {JoinRepoDetails.map((data) => {
                        return (
                            <div className="col-md-4 my-3" key={data._id}>
                                <Repo RepoName={data.repoName} CreatorName={data.createrName} RepoId={data._id}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

