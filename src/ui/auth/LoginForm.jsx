import {Form} from "react-router-dom"
import FormInput from "../../components/forms/FormInput.jsx";
import Button from "../../components/buttons/Button.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";

const LoginForm = () => {

  return (
    <Form className={"flex flex-col w-64 items-center"}>
      <h1 className={"text-2xl font-bold mb-4"}>Login</h1>
      <FormInput name={"username"} label={"Username"} required/>
      <FormPasswordInput name={"password"} label={"Password"} type="password" required/>
      <Button className={"mt-4"} text={"login"} type="submit"/>
    </Form>
  )
}

export default LoginForm