import React,{useState,useRef} from 'react'
import Repo from './Repo'

export default function Home() {

    const close = useRef(null); // ye pop mai jo close button hai uskp click krne kr liye
    const FirstDetails = [
        {
            Id : 1,
            RepoName: "Data Structure",
            CreaterName: "O.P.Vyas"
        },
        {
            Id : 2,
            RepoName: "Data Structure",
            CreaterName: "O.P.Vyas"
        },
        {
            Id : 3,
            RepoName: "Data Structure",
            CreaterName: "O.P.Vyas"
        },
        {
            Id : 4,
            RepoName: "Data Structure",
            CreaterName: "O.P.Vyas"
        },
        {
            Id : 5,
            RepoName: "Data Structure",
            CreaterName: "O.P.Vyas"
        },
    ]// DataBase hume ye object dega
    const [RepoDetails, setRepoDetails] = useState(FirstDetails); // ye Repo details hai particular user ka
    const [repo, setrepo] = useState({   // ye Individual repo hai jisme repo and creter ka naam jayega
        RepoName : "",
        CreaterName : "",
        Id : 0
    })

    const Handle = (e) => {
        setrepo({...repo,[e.target.id] : e.target.value.toString()});
    }

    const HandleSubmit = () => { // this is for adding new repo by the user
        repo.Id = Math.max(...RepoDetails.map(o => o.Id), 0)+1;
        RepoDetails.push(repo);
        setRepoDetails(RepoDetails);
        //console.log(RepoDetails);
        setrepo({
            RepoName : "",
            CreaterName : "",
            Id : 0
        })
        close.current.click();
    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" /*style={{ display: "none" }}*/ className="btn btn-primary" /*ref={ref}*/ data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Repository
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputRepo" className="form-label">Repository Name</label>
                                <input type="text" className="form-control" required value={repo.RepoName} onChange={Handle} id="RepoName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCreater" className="form-label">Creater Name</label>
                                <input type="text" className="form-control" required value={repo.CreaterName} onChange={Handle} id="CreaterName" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={HandleSubmit} >Save changes</button>
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
                            <div className="col-md-4 my-3" key={data.Id}>
                                <Repo RepoName={data.RepoName} CreaterName={data.CreaterName} />
                            </div>
                        )
                    })}
                </div>
                <h1 className='text-center'>Joined Repository</h1>
                {/* There is Repository which was joined by this user but not created */}
                <div className="row">
                    {RepoDetails.map((data) => {
                        return (
                            <div className="col-md-4 my-3" key={data.Id}>
                                <Repo RepoName={data.RepoName} CreaterName={data.CreaterName} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

