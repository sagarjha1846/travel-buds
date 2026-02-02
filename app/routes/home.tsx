import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Travel Buddy" },
    { name: "description", content: "Your personal travel companion app." },
  ];
}

export default function Home() {
  return <Welcome />;
}
