import {useEffect, useState} from "react";
import LoginForm from "./LoginForm.jsx";
import Button from "../../components/buttons/Button.jsx";
import RegisterFrom from "./RegisterFrom.jsx";
import {registerUser, signInUser} from "../../data/firebase/firebaseAuth.js";
import {redirect, useActionData, useNavigation} from "react-router-dom";
import error from "eslint-plugin-react/lib/util/error.js";

export const loginScreenAction = async ({request}) => {
    const formData = await request.formData()
    const formId = formData.get('formId')
  const email = formData.get('email');
  const password = formData.get('password');
  const username = formData.get('username');
  const {user, error} = await (formId === "login" ? signInUser(email, password) : registerUser(username, email, password));
 if (user) {
   return redirect("/app");
 }
 return {error}

}

const LoginScreen = () => {
  const actionData = useActionData()

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    if(actionData && actionData.error) {
      setError(actionData.error)
    }
  }, [actionData]);

  const switchToLogin = () => {
    setError(null)
    setIsLogin(true);
  }

  const switchToRegistration = () => {
    setError(null)
    setIsLogin(false);
  }

  return (
    <div className="h-screen w-screen bg-blue-200 flex justify-center items-center">
      <div className="flex flex-col">
        <div className={"bg-white w-96 h-96 rounded-t-2xl flex justify-center items-center flex-col"}>
          {isLogin ? <LoginForm/> : <RegisterFrom/>}
          {error && <em className={'text-red-500 text-lg'}>{error.message}</em>}
        </div>
        <div className={"flex"}>
          <LoginScreenTab text={'Login'} onClick={switchToLogin} active={isLogin}/>
          <LoginScreenTab text={'Register'} onClick={switchToRegistration} active={!isLogin}/>
        </div>
      </div>

    </div>
  )
}

  const LoginScreenTab = ({
    active,
    text,
    onClick,
  }) => {
      return(
        <div className={`${active ? "bg-white" : "bg-blue-100"} h-12 w-48 flex justify-center items-center rounded-b-2xl `}>
          <button className={"text-lg w-full h-full"} onClick={onClick}>{text}</button>
        </div>
      )
  }



export default LoginScreen