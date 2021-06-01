import heroGif from '../assets/img/heroGif.gif';

export function HomePage() {

    return (
        <section className="container home-page-container">
            <section className="flex align-center justify-center hero-container">
                <div className="flex">
                    <div className="flex column">
                        <h1>Build your site with Pixie!</h1>
                        <p>Pixie bla bla bla</p>
                        <button>Go Pixie!</button>
                    </div>
                    <img src={heroGif} />
                </div>
            </section>
            <section className="section-container">
                b
            </section>
            <section className="section-container">
                c
            </section>
        </section>
    );
}