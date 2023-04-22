import React, { useState, useEffect } from 'react';
import "./Projects.css";


function Projects() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./json/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Project</h1>
            {data.map(item => (
                <div className="ProjectContainer">
                    
                    <div className="ProjectText"> 
                        <a href={item.url}>{item.title} url</a>
                        <div>{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;