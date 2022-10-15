import React from 'react'
import { useState } from 'react'
const FormaSubmit = () => {
    const [infoForm, setInfoForm] = useState()

    const handdleSubmit = e => {
        e.preventDefault()
        const obj = {}
        obj.mane = e.target.name.value;
        obj.lastname = e.target.lastname.value;
        obj.emal = e.target.email.value;
        setInfoForm(obj)
    }
    console.log(infoForm)

    return (
        <div>
            <form onSubmit={handdleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />

                <label htmlFor="lastename"> Las Name:</label>
                <input type="text" id="lastname" placeholder='last Name' />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormaSubmit