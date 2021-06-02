import { Link } from 'react-router-dom';
import heroGif from '../assets/img/heroGif.gif';

export function HomePage() {

    return (
        <section className="container homepage-background">
            <section className="flex align-center justify-center hero-container">
                <div>
                    <h1 className="text-center title">Create a website you're proud of with Pixie!</h1>
                    <div className="flex wrap">
                        <div className="flex column wrap content-container">
                            <p>Pixie is an easy-to-use, strong &amp; uniquie platform for web building!</p>
                            <Link to="/templates" className="text-center">Go Pixie!</Link>
                        </div>
                        <img src={heroGif} alt="Go Pixie!" />
                    </div>
                </div>
            </section>
            {/* <section className="section-container">
                Guide
            </section>
            <section className="section-container">
                Templates
            </section> */}
        </section>
    );
}