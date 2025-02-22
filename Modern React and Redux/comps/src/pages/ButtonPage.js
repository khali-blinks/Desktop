import Button from "../components/Button";
import { GoLocation, GoBell, GoGitBranch } from "react-icons/go";

function ButtonPage() {

    return <div>
            <div>
                <Button success rounded className="mb-5" ><GoLocation/>Click Me!!</Button>
            </div>
            <div>
                <Button warning outline><GoBell/>Buy Now!</Button>
            </div>
            <div>
                <Button secondary outline><GoGitBranch/>See Deal</Button>
            </div>
            <div>
                <Button danger outline>Hide Ads!</Button>
            </div>
            <div>
                <Button primary outline rounded >Bingo!</Button>
            </div>
        </div>
}

export default ButtonPage;