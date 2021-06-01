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
            {/* <section className="section">
                <div className="title">ABOUT US.</div>
                <div className="flex1">
                    <div className="img"></div>
                    <div className="other-div">
                        <span className="title2">WE DO FOOD.</span>
                        <span className="span1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, atque quae tempora magnam omnis iure dolor? Beatae itaque quis autem officiis? Odio, dolorum ratione nobis voluptas necessitatibus explicabo neque cupiditate illum veritatis natus. Atque reprehenderit quod odit eveniet a iste tempora officia repellat nostrum? Aspernatur perferendis cumque veniam a ex!</span>
                    </div>
                </div>
            </section> */}
        </section>
    );
}