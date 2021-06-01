import React from 'react';

export class About extends React.Component {
    state = {

    }

    render() {
        return (
            <section className="container">
                <section className="about-section">
                    <h1 className="title">About Pixie</h1>
                    <section className="flex wrap space-between about-pixie-container">
                        <div className="flex column text">
                            <h2>We are Pixie!</h2>
                            <p>
                                Pixie is an easy-to-use, strong and uniquie platform for web building.<br />
                            With Pixie, everyone and every business, can set his own great-looking, responsive and dynamic website,
                            without any need of technologie knowledge!
                            </p>
                            <p>
                                As for june 2021, Pixie hires hounders web developers that put all they're effory on one and only mission.
                            </p>
                            <div className="moto">Help you build you're website!</div>
                        </div>
                        <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/manage-your-team@2x.png" alt="About us image" />
                    </section>
                </section>


                <section className="about-section">
                    <h1 className="title">Contact us</h1>

                </section>


                <section className="about-section">
                    <h1 className="title">Communication</h1>
                    <section className="communication-container">
                        <div className="flex column">
                            <div className="brand">Pixie</div>
                            <div>
                                <span className="label">Address:</span><span>Yosef Yekuti'eli 4, Tel-Aviv, Israel.</span>
                            </div>
                            <div>
                                <span className="label">Phone:</span><span>+972-03-9451620</span>
                            </div>
                            <div>
                                <span className="label">Email:</span><span>contact@pixie.com</span>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        )
    }
}