import React, { useEffect, useState } from 'react' ;
import './Shelter.css';

const ShelterList =() => {
    const [shelter, setShelter] = useState([]);

    useEffect(() => {
        // Fetch shelters from API (to be implemented)
        // Example:
        // fetch('API_URL')
        //   .then(response => response.json())
        //   .then(data => setShelters(data));
      }, []);

      return (
        <section className="shelter-list">
            <div className="container">
                <h2>Nearby Animal Shelters</h2>
                <ul>
                    {ShelterList.map((shelter, index) => (
                        <li key={index}>
                            <h3>{shelter.name}</h3>
                            <p>{shelter.address}</p>
                            <p>Contact: {shelter.contact}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
      );
};

export default ShelterList;