import Image from "next/image";
import {signIn} from "next-auth/react";

function Login() {
  return (
    <div className={"grid place-items-center"}>
      <Image
        src={'https://links.papareact.com/5me'}
        width={400}
        height={400}
        className={"p-20"}
        alt=""
      />
      <h1 onClick={signIn} className={"p-5 bg-blue-500 hover:bg-blue-400 rounded-full text-white text-center cursor-pointer"}>Login with Facebook</h1>
    </div>
  )
}

export default Login