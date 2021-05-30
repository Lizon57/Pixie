import { Link } from "react-router-dom";

export function HomePage() {

    return (
        <section>
            <div className="homepage-hero">
                <div>
                    <span>Build your desired site, effortlessly.</span>
                    <Link to="/editor"><button>START BUILDING</button></Link>
                </div>
            </div>
        </section>
    );
}