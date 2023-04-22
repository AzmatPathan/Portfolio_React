import React, { useState, useEffect } from 'react';
import "./Skills.css"

function Skills() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./json/skills.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Skills</h1>
            {data.map(item => (
                <div className="SkillContainer">
                    <div classNameName="SkillText">
                        <div><h2>{item.skill_name}</h2></div>
                        <div>{item.skill_desc}</div>
                        <div>{item.subjects}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;