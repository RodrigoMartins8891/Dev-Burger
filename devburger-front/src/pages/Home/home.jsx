import estilo from './Home.module.css';
import burger from '../../assets/burge.png';
import ellipse from '../../assets/ellipse 2.png';
import thumb1 from '../../assets/1.png';
import thumb2 from '../../assets/2.png';
import thumb3 from '../../assets/3.png';
import thumb4 from '../../assets/5.png';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <main className={estilo.main}>

            <header className={estilo.header}>
                <h1>DEVBURGER</h1>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Shop</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/">About</Link>
                </nav>
            </header>

            <section className={estilo.hero}>
                <div className={estilo.text}>
                    <span>THE ULTIMATE</span>
                    <h2>Burger Club</h2>
                    <p>Savor the flavor, join the club!</p>

                    <div className={estilo.thumbnails}>
                        <img src={thumb1} alt="Burger Variedade 1" />
                        <img src={thumb2} alt="Burger Variedade 2" />
                        <img src={thumb3} alt="Burger Variedade 3" />
                        <img src={thumb4} alt="Burger Variedade 4" />
                    </div>
                </div>

                <div className={estilo.image}>
                    <img src={burger} alt="Burger" />
                </div>

                <div className={estilo.image1}>
                    <img src={ellipse} alt="Ellipse" />
                </div>
            </section>

        </main>
    );
}
