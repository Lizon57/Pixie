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
            <div className="hero3">
                <div>
                    <span className="title1">We Love the Sea</span>
                    <span className="title2">Come sea why...</span>
                </div>
            </div>
        </section>
    );
}