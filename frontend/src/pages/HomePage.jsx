import { Link } from 'react-router-dom';
import hero from '../assets/img/homepage/hero.gif';
import construct from '../assets/img/homepage/construct.jpg';

export function HomePage() {

    return (
        <section className="homepage">
            <section className="container">
                <section className="flex align-center justify-center hero-container">
                    <div>
                        <h1 className="text-center title">Create a website you're proud of with <span>Pixie!</span></h1>
                        <div className="flex wrap">
                            <div className="flex column wrap content-container">
                                <p>Pixie is an easy-to-use, strong &amp; uniquie platform for web building!</p>
                                <Link to="/templates" className="text-center">Go Pixie!</Link>
                            </div>
                            <img src={hero} alt="Go Pixie!" />
                        </div>
                    </div>
                </section>
                <section className="section-container">
                    <div className="guide-container">
                        <div className="flex wrap">
                            <div className="flex column align-center justify-center text">
                                <h2>Pick a template!</h2>
                                <p>First, register our so fucking awsome tool!</p>
                                <p>Than, pick a template!</p>
                            </div>
                            <img src={construct} alt="Pick!" />
                        </div>
                        <div className="flex wrap">
                            <img src={construct} alt="Build!" />
                            <div className="flex column align-center justify-center text">
                                <h2>Make it special!</h2>
                                <p>Insert contact.</p>
                                <p>Design it.</p>
                            </div>
                        </div>
                        <div className="flex wrap">
                            <div className="flex column align-center justify-center text">
                                <h2>Publish!</h2>
                                <p>Send the link to your friends.</p>
                                <p>Get a lot of bullshit.</p></div>
                            <img src={construct} alt="Build!" />
                        </div>
                    </div>
                </section>
                {/* <section className="section-container">
                Templates
            </section> */}
            </section>
        </section>
    );
}