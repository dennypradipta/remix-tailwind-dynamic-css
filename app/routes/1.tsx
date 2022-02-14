import { MetaFunction } from "remix";
import Template from "../components/Template";
import indexStyle from '~/styles/custom-style-1.css';

export const meta: MetaFunction = () => {
  return { title: "Welcome to Remix" };
};

export function links() {
  return [{ rel: "stylesheet", href: indexStyle }];
}

export default function FirstVariation() {
  return (
    <Template>
      <h1>Welcome to Remix first varation example</h1>
      <h2>Change the CSS:</h2>
      <a href="/">Back to Index</a>
      <a href="/2">Second varation</a>
    </Template>
  )
}
