import {Form} from "react-router-dom"
import FormInput from "../../components/forms/FormInput.jsx";
import Button from "../../components/buttons/Button.jsx";
import FormPasswordInput from "../../components/forms/FormPasswordInput.jsx";

const LoginForm = () => {

  return (
    <Form className={"flex flex-col w-64 items-center"} method="post">
      <h1 className={"text-2xl font-bold mb-4"}>Register</h1>
      <input type={"hidden"} name={"formId"} value={'register'}/>
      <FormInput name={"username"} label={"Username"} required/>
      <FormInput name={"email"} label={"Email"} type={"email"} required/>
      <FormPasswordInput name={"password"} label={"Password"} type="password" required/>
      <Button className={"mt-4"} text={"Register"} type="submit"/>
    </Form>
  )
}

export default LoginForm