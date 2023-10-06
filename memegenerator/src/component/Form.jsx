import { useState } from "react"



export default function Form(){

    const[signUpForm, setsignUpForm]= useState({
        emaiAddress:"",
        password:"",
        confirmPassword:"",
        joinedNewsletter:false,
    })

    function  handlechange(event){
        const {name,value,type,checked}=event.target;
        setsignUpForm(prev=>({
            ...prev,
            [name]: type==="checkbox" ? checked :value
        }))
       
    }
    console.log(signUpForm)

    function handleSubmit(event){
        event.preventDefault();

        if(signUpForm.password===signUpForm.confirmPassword){
            console.log("Successfully signed up")
        }
        else{
            console.log("Passwords do not match")
            return
        }
        if(signUpForm.joinedNewsletter){
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return(

        <>
         <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="emaiAddress"
                    onChange={handlechange}
                    value={signUpForm.emaiAddress}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handlechange}
                    value={signUpForm.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    onChange={handlechange}
                    value={signUpForm.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handlechange}
                        checked={signUpForm.joinedNewsletter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
        </>
    )
}