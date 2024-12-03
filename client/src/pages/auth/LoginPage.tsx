import "./Login.scss"
import Input from "../../assets/UI/input/Input.tsx";
import {useState} from "react";
import {User} from "../../../@types/User.ts";


function LoginPage() {

    const [fetchedData,setFetchedData]=useState<User|undefined>();

     async function getUser(id:number):Promise<User|null>{
         const url = import.meta.env.VITE_BASE_URL;
         try{
             const response = await fetch(url);
             return response.json();
         }catch(err){
             console.log(err);
         }
    }

    async function onButtonClick():Promise<void>{
         const user:User|null= await getUser(1);
         if(user!==null){
             setFetchedData(user);
         }
    }

    async function postSignUp(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:"martin@qnudsen.com",password:"StrongPass123!@"})
        };
        console.log(requestOptions);
        fetch(import.meta.env.VITE_BASE_URL+'/auth/signup', requestOptions)
            .then(async response => {
                console.log(response);
            })
            .catch(error => {

            })

    }



    return (
        <div className="loginPage">
            <div className="loginField">
                <div className="header" >Login</div>
                <Input name="Email"/>
                <Input name="Password"/>
                <button onClick={postSignUp}>click</button>
                {fetchedData && <div>
                    {fetchedData}
                </div>}
            </div>
        </div>
    )
}

export default LoginPage
