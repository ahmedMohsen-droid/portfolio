import React from "react";
import './Form.css'
const Form= () => {
    return(
        <div>
            <form>
                <label>Your Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type="email"/>
                <label>Supject</label>
                <input type="text"/>
                <label>Message</label>
                <textarea rows='6' placeholder="Type Your Message Here"/>
                <button className="btn"> Submit </button>
            </form>
        </div>
    )
}

export default Form;