import './About.css';

function About() {
    return (
        <div>
            <div className='hero2'>
                <div className='content2'>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className='about-content'>
                <h2>ABOUT ABDELMOUMEN SCHOOL</h2>
                <p>
                    Holder of a benchmark brand in the private education and teaching professions, the Abdelmoumen Institution is regaining its former pace of innovation by beginning a major project to modernize its premises and restructure its teams. educational. Today, it returns under the new name Abdelmoumen Schools, more modern, more adapted to the needs of students and teachers, and perfectly meeting the requirements of parents.
                </p>
            </div>
            <div className='facilities'>
                <h2>FACILITIES</h2>
                <div className='video-container'>
                    <div className='video1'>
                        <video className='video-element' width="700" controls poster=''>
                            <source src="/vid/vid1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className='video2'>
                        <video className='video-element' width="700" controls>
                            <source src="/vid/vid1.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
