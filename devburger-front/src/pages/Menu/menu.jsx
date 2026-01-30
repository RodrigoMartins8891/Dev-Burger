import { Link } from 'react-router-dom';

import estilo from '../Home/Home.module.css';
import estiloMenu from './Menu.module.css';
import thumb1 from '../../assets/11.png';
import thumb2 from '../../assets/12.png';
import thumb3 from '../../assets/13.png';
import thumb4 from '../../assets/14.png';
import thumb5 from '../../assets/15.png';
import thumb6 from '../../assets/16.png';
import thumb7 from '../../assets/17.png';
import thumb8 from '../../assets/18.png';

export default function Menu() {
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
            <section className={estiloMenu.section}>
                <h2>MENU</h2>

                <div className={estiloMenu.menuGrid}>
                    <div className={estiloMenu.card}>
                        <img src={thumb1} alt="Variedade 1" />
                        <span>fried chicken</span>
                    </div>
                    <div className={estiloMenu.card}>
                        <img src={thumb2} alt="Variedade 2" />
                        <span>Burger</span>
                    </div>
                    <div className={estiloMenu.card}>
                        <img src={thumb3} alt="Variedade 3" />
                        <span>Sides</span>
                    </div>
                    <div className={estiloMenu.card}>
                        <img src={thumb4} alt="Variedade 4" />
                        <span>Fries</span>
                    </div>

                </div>

                <div className={estiloMenu.menuGrid}>
                    <div className={estiloMenu.card}>
                        <img src={thumb5} alt="Variedade 5" />
                        <span>coffe</span>
                    </div>
                    <div className={estiloMenu.card}>
                        <img src={thumb6} alt="Variedade 6" />
                        <span>Combo</span>
                    </div>
                    <div className={estiloMenu.card}>
                        <img src={thumb7} alt="Variedade 7" />
                        <span>Wraps</span>
                    </div>
                    <div className={estiloMenu.card}>
                        <img src={thumb8} alt="Variedade 8" />
                        <span>Salads</span>
                    </div>
                </div>
            </section>

        </main>
    );
}