import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import { Jacques_Francois } from "next/font/google";

interface myFunctionProps {
  a: [];
  b: [];
}

export default function Home(a, b) {
  const myFunction = (a, b) => {
    console.log(a);
  };

  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"));

  return <div>hello</div>;
}
