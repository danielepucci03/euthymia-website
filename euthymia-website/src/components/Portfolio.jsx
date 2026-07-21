import video1 from '../assets/1.mp4'
import video2 from '../assets/2.mp4'
import video3 from '../assets/3.mp4'





function Portfolio() {
    return (
        <section id="portfolio">

            <div className="container-portfolio">

                <div className="portfolio-intro">

                    <h2>
                        Le idee prendono forma
                    </h2>

                    <p>
                        Dai reel ai contenuti fotografici, ogni progetto nasce per raccontare un'attività in modo autentico e coinvolgente.
                    </p>

                </div>


                <div className="portfolio-carousel">

                    <div className="project-card">
                        <video src={video1} controls muted />
                    </div>

                    <div className="project-card">
                        <video src={video2} controls muted />
                    </div>

                    <div className="project-card">
                        <video src={video3} controls muted />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Portfolio