import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'

function Student(){
    const url = `https://www.hatchways.io/api/assessment/students`
    const [student, setStudent] = useState(null)
    const [grades, setGrades] = useState(null)
    const [searchedName, setSearchedName] = useState("");
    const handleChange = event => {
        setSearchedName(event.target.value);
    }
    

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setStudent(response.data)
        })
    }, [url])

    if(student){
        let people = student.students.map(a => a.firstName);
        const searchedResults = !searchedName
        ? people
        : people.filter(person =>
            person.toLowerCase().includes(searchedName.toLocaleLowerCase())
      );
         content = 
        <div>
            <div>
                <input 
                    id="name-input" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    placeholder="Enter name here"
                    value={searchedName}
                    onChange={handleChange}
                    />
            </div>
            <ul>
                {
                    student.students.map(stud => {
                        if(searchedResults.includes(stud.firstName)){
                            return (
                            <li key={stud.id}>
                                <div>
                                <img className="left-0 no-wrap"
                                    src={stud.pic}
                                    alt={stud.firstName}
                                />
                                <p className="text-2xl font-bold mb-3">{stud.firstName}</p>
                                <p className="text-2xl mb-3">Email: {stud.email}</p>
                                <p className="text-2xl mb-3">Company: {stud.company}</p>
                                <p className="text-2xl mb-3">Skill: {stud.skill}</p>
                                <p className="text-2xl mb-3">Average: {stud.grades.reduce((all, one, _, src) => all += one / src.length, 0)}%</p>
                                <span className="collapsible">
                                    <FontAwesomeIcon
                                        icon={faArrowDown}
                                        onClick={() => setGrades(!grades)}
                                    />
                                
                                </span>
                                <ul className={grades ? "grade" : null}>
                                    {stud.grades.map(grade => <li className="text-lg mb-3"> {grade} </li>)}
                                </ul>
                                </div>
                            </li>
                            )
                        }
                    })
                }
            </ul>

        </div>
    }

    return(
        <div>
        {content}
        </div>
        )
    
}

export default Student