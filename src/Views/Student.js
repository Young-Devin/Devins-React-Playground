import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Student(){
    const url = ` https://www.hatchways.io/api/assessment/students`
    const [student, setStudent] = useState(null)
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


    console.log(student)

    if(student){
        let people = student.students.map(a => a.firstName);
        console.log(people)
        const searchedResults = !searchedName
        ? people
        : people.filter(person =>
            person.toLowerCase().includes(searchedName.toLocaleLowerCase())
      );
      console.log(searchedResults)
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
                    student.students.map(stud => (
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
                            </div>
                        </li>
                    ))
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