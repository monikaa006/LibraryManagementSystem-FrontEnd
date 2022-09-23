import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "./Base";
const LoginApi=`${BaseUrl}/users/SignIn`
const SignUp=`${BaseUrl}/users`
const Books=`${BaseUrl}/books`
const  Issuebooks=`${BaseUrl}/issuedbooks`
const ReturnBook = `${BaseUrl}/issuedbooks/return`

const token = JSON.parse(localStorage.getItem('token'));
const Header={headers: { "Authorization":`${token}`,"ngrok-skip-browser-warning": "*" }
}
export const  LoginA=(item)=>{
    const navigate=useNavigate();

    axios.post(LoginApi,item,Header).then((res)=>{

        localStorage.setItem("token",JSON.stringify(res.data.token))
        localStorage.setItem("role",JSON.stringify(res.data.user.role))
        if(res.data.user.role==="admin"){
            alert("admin login successfuly");
            navigate("/Dashboard")
        }
        else{
           alert("user login succesfully")
            navigate('/StudentHome')
        }
        console.log(res.data)
    }    
    ).catch((err)=>{
        console.log(err)
    })

}
export const  SignUP=(item)=>{
    axios.post(SignUp,item,Header).then((res)=>{
        console.log(res.data)
    }    
    ).catch((err)=>{
        console.log(err)
    })

}
export const  Book=()=>{
    axios.get(Books,Header).then((res)=>{
        return(res.data)
    }    
    ).catch((err)=>{
        console.log(err)
    })
}

export const  issueBook=(userId)=>{
    axios.post(Issuebooks,userId,Header).then((res)=>{
        console.log(res.data)  
        alert("issue book successfully")   
    }    
    ).catch((err)=>{
        console.log(err)
    })

}
export const  issuedBook=()=>{
    axios.get(Issuebooks,Header).then((res)=>{
        return (res.data)     
    }    
    ).catch((err)=>{
        console.log(err)
    })

}
export const  Returnbook=(user_id)=>{
    const navigate=useNavigate()
    axios.post(ReturnBook,user_id,Header).then((res)=>{
            console.log(res.data.fine)
            localStorage.setItem("Fine",res.data.fine)
            if(res.data.fine){  
                alert(res.data.message  + " your fine is " + res.data.fine )
               navigate("/PayFine")
            }               
            // IssueBooks();

         }
    ).catch((err)=>{
        console.log(err)
    })
}