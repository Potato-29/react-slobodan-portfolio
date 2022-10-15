import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Home = () => {

    const [letterClass, setletterClass] = useState('text-animate');
    const nameArray = ['r', 'a', 'y', 'a', 's']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


    useEffect(() => {
        setTimeout(() => {
            return setletterClass('text-animate-hover')
        }, 4000)
    }, [])


    return (  
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="" />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={20}
                />
                </h1>
                <h2>Frontend Developer / Web Designer / Gamer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    );
}
 
export default Home;
