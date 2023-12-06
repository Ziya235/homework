
import login from '../img/Login.png'
import turista from '../img/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'



import fb from '../img/fb.png'
import apple from '../img/apple.png'
import google from '../img/google.png'


import './login_page.css'

import { useForm } from 'react-hook-form'


export function LoginPage() {

    const form = useForm();
    const { register,handleSubmit,formState} = form
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log("form submitted",data);
    }

    return(
        <div className='login_main_page'>
        <div className='login_image'>
            <img src={login} alt='login'/>
        </div>


        <div className='login'>
            <div className='login_for_turista'>
                <img src={turista} />
            </div>

            
            <div className='form_part'>
            <h1>Sign in for your exciting journey</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="username">Email</label> <br></br> <br></br>
                <input placeholder='someone@example.com' type='text' id='username' {...register("username",
                 {required : "this field is mandatory",
                 validate:(value) => {
                    return !value.includes('@') && "incorret "

                 } 
                 })}/>     <br></br> <br></br>
   
                <p className='error_message'> {errors.username?.message}</p> <br></br>

                <label htmlFor="password">Password</label>  <br></br> <br></br>
                <div className='password_for_eye'>
                <input type='password' id='password' {...register("password",
                {required : "it is important",
                //     pattern: {
                //     value : /[A-Z]$/,
                //     message: "it is wrong"
                // }
                })} />
                <FontAwesomeIcon icon={faEye} style={{color: "#f50000",}} className='login_eye_icon' onClick={password_togggle}/>
                </div>
<br></br>
<p className='error_message'> {errors.password?.message}</p>
                    <p className='forgot_password'>Forgot Password ?</p> <br></br>
                <button> Sign in</button>
            </form>
            </div >

            <div className='sosial_media'>


            <p> or use one of this</p>
            <div className='sosial_media_images'>
                <img src={google}  alt='google'/>
                    
                <img src={apple}  alt='apple'/>
                <img src={fb} alt='fb' />
            </div>
            
            <p>Don’t have an account? <span style={{color:"blue"}}>Create one for new adventure! </span></p>

            </div>


        </div>
        </div>
    )
}

export function password_togggle() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }



export default LoginPage