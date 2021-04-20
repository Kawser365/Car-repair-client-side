import React, { useContext } from 'react';
import Sidebar from '../Sidbar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const admin = {
            email: data.email
        };
        const url =`https://thawing-meadow-08220.herokuapp.com/addAdmin`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin,loggedInUser.email)
        })
        .then(res => console.log('server side response'))
    }
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Make Admin</label>
                <br/>
                <input style={{width:'280px'}} type="email"  {...register("email",{ required: true })} />
                <br/><br/>
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default MakeAdmin;