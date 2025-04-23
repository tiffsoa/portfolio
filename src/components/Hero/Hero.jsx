import heroImage from './tiff.png';
import './Hero.css'
import resume from './resume.pdf'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <h1>hi, I'm Tiffany</h1>
                    <h3>i like software, design, and everything in between</h3>
                    <div className='hero-resume'>
                        <a href={resume} target="_blank">
                            resume
                            <ArrowUpRightIcon className='hero-arrow'/>
                        </a>
                    </div>
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