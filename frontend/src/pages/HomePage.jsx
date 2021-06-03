import { Link } from 'react-router-dom';
import hero from '../assets/img/homepage/hero.gif';
import construct from '../assets/img/homepage/construct.jpg';

export function HomePage() {

    return (
        <section className="homepage">
            <section className="flex align-center justify-center hero-container">
                <div>
                    <h1 className="title">Create a website you're proud of with <span>Pixie!</span></h1>
                    <div className="flex wrap">
                        <div className="flex column wrap content-container">
                            <p>Pixie is an easy-to-use, strong &amp; uniquie platform for web building!</p>
                            <Link to="/template" className="text-center">Go Pixie!</Link>
                        </div>
                        <img src={hero} alt="Go Pixie!" />
                    </div>
                </div>
            </section>


            <section>
                <div className="guide-parse-background">
                    <section className="container">
                        <div className="flex wrap space-between">
                            <div className="text">
                                <h2>The Freedom to Create the Websites You Want</h2>
                                <p>
                                    Design and build your own high-quality websites.
                                    Whether you’re promoting your business,
                                    showcasing your work,
                                    you can do it all with the PIXIE website Editor.</p>
                            </div>
                            <img src={construct} alt="guide parse" />
                        </div>
                    </section>
                </div>

                <div className="guide-parse-background">
                    <section className="container">
                        <div className="flex wrap space-between">
                            <div className="text">
                                <h2>Customize your site</h2>
                                <p>Pick a template and customize anything,
                                    or answer a few questions and get a free website designed just for you</p>
                            </div>
                            <img src={construct} className="parse-even" alt="guide parse" />
                        </div>
                    </section>
                </div>

                <div className="guide-parse-background">
                    <section className="container">
                        <div className="flex wrap space-between">
                            <div className="text">
                                <h2>PIXIE Editor</h2>
                                <p>Start from scratch or choose from over designer-made templates that you can fully
                                    customize using PIXIE website Editor.</p>
                            </div>
                            <img src={construct} alt="guide parse" />
                        </div>
                    </section>
                </div>
            </section>
        </section>
    );
}