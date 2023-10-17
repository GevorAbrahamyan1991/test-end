import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-black">
      <ul className="container flex py-4 mx-auto space-x-6 text-2xl font-bold text-white">
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/drum-kit">Drum Kit</Link>
        </li>
      </ul>
    </div>
  );
}
