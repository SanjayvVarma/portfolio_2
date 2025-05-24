import './about.css';
import imgSrc from '../../assets/mydimg.png';

const About = () => {
    return (
        <>
            <div className="container about" id='about'>
                <h1 className='text-center'>About Me</h1>
                <div className='about-content my-5' data-aos='flip-up' data-aos-duration='1000'>
                    <div className="left">
                        <img src={imgSrc} alt="Sanjay" />
                    </div>
                    <div className="right">
                        <p>
                            Hi, I'm <b>Sanjay</b>, a Full Stack Web Developer with expertise in both frontend and backend development. I enjoy building scalable, user-friendly web applications that deliver smooth and seamless experiences. I’m always eager to learn new technologies and apply them to solve real-world problems.
                        </p>

                        <h5>Tech Stack :-</h5>
                        <div>
                            <span>💻 Frontend :-</span> React.js (Vite), HTML, CSS, JavaScript <br />
                            <span>⚙️ Backend :-</span> Node.js, Express.js <br />
                            <span>📦 Database :-</span> MongoDB, Firebase <br />
                            <span>🛠️ Tools & Other Skills :-</span> Git, GitHub, API Integration, VS code, Postman <br />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About