import heroImage from './tiff.png';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <h1>hi, I'm Tiffany</h1>
                    <h3>i like software, design, and everything in between</h3>
                    <a href="#">resume</a>
                </div>
                <div className="hero-right">
                    <img src={heroImage} alt="a picture of tiffany" className="hero-image"/>
                </div>
            </div>
            <hr/>
        </section>
    );
}

export default Hero;