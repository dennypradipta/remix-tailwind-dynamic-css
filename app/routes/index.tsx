import { MetaFunction } from "remix";
import Template from "../components/Template";
import indexStyle from '~/styles/index.css';

export const meta: MetaFunction = () => {
  return { title: "Welcome to Remix" };
};

export function links() {
  return [{ rel: "stylesheet", href: indexStyle }];
}

export default function Index() {
  return (
    <Template>
      <h1>Welcome to Remix example</h1>
      <h2>Change the CSS:</h2>
      <a href="/1">First variation</a>
      <a href="/2">Second varation</a>
    </Template>
  )
}
