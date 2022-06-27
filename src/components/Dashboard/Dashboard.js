import { json } from 'express';
import { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {

    const [project, setProject] = useState([]);


    const getAllProjects = () => {
        const baseUrl = 'http://localhost:4000';
        console.log(baseUrl);
        fetch(baseUrl)
            .then((response) => response)
            .then((data)=>setProject(data?.data));

    }
    console.log('This is project', project)

    useEffect(() => {
        getAllProjects()
    }, [])

    const allProject = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"];

    allProject.map((map) => console.log(map))
    return <div className='container'>
        <h1 className='text-center title'>Dashboard</h1>
        <div className='row m-5 main-area'>
            {allProject.map((map) => <div className='col-4 box-area '>
                <h1 className='text-center mt-5 '>
                    {map}
                </h1>
            </div>)}
        </div>


    </div>
}

export default Dashboard;