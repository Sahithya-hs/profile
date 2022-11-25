import React,{useState, useEffect} from 'react'
function Profile()
{
    const[name,setname] = useState()
    const[email,setemail] = useState()
    const[age,setage] = useState()
    const[hobbies,sethobbies] = useState()

    function namehandler(e)
    {
        setname(e.target.value);
        // console.log(e.target.value);
    }

    function emailhandler(e)
    {
        setemail(e.target.value);
        // console.log(e.target.value);
    }
    function agehandler(e)
    {
        setage(e.target.value);
        // console.log(e.target.value);
    }
    function submithandler(e)
    {
        e.preventDefault();
        console.log(name, email, age, hobbies)
    }

    function hobbieshandler(e)
    {
        sethobbies(e.target.value);
    }

    useEffect(()=>{
        console.log('Runs when Component Changes')
    })

    useEffect(()=>{
        console.log('Runs')
    },[])


    return(
        <div>
            <form action="">
                <label>Name : </label>
                <input type="text" onChange={namehandler}/> <br />
                <label>Email id : </label>
                <input type="email" onChange={emailhandler} /> <br />
                <label>Age : </label>
                <input type="number" onChange={agehandler} /><br />
                <label>Hobbies : </label>
                <input type="text"onChange={hobbieshandler}/><br />
                
                <button onClick={submithandler}>
                    Submit
                </button>
            </form>
            <h1>{name}</h1>
        </div>
    )
}

export default Profile;