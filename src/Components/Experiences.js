import React, { useState, useEffect } from 'react';
import './Experiences.css'

function Experiences() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./json/experiences.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="experience">
            <h1>Experience</h1>
            {data.map(item => (
                <div>
                    <h2>{item.company_name}</h2>
                    <div>
                        Designation:{item.designation}
                    </div>
                    <div>
                        Experience From:{item.experience_from}
                    </div>
                    <div>
                        Experience To:{item.experience_to}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experiences;