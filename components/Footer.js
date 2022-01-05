import Twitter from "../elements/icons/Twitter";
import Xbox from "../elements/icons/Xbox";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-flow-row gap-6">
        <div className="flex justify-start space-x-4">
          <a
            href="https://twitter.com/jpvalery"
            className="w-6 h-6 hover:text-stone-400"
          >
            <span className="sr-only">Twitter</span>
            <Twitter />
          </a>
          <a
            href="https://account.xbox.com/en-ca/profile?gamertag=jpvalery"
            className="w-6 h-6 hover:text-stone-400"
          >
            <span className="sr-only">Xbox</span>
            <Xbox />
          </a>
        </div>
        <div>
          <p className="text-sm">&copy; 1992-2022 Jp Valery.</p>
          <p className="text-sm">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
