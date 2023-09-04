import '../CSS/Navbar.css'
import Logo from '../Images/peakpx.png'
import { useState } from 'react';

declare global {
    interface Window {
        ethereum: any;
    }
}


const Navbar = () => {

    const [Account, setAccount] = useState<string>("");

    const ConnectMetamask = async () => {

        const { ethereum } = window;

        const acc = document.getElementById('munde');

        const account = await ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccount(account[0]);

        ethereum.on('accountsChanged', async (accountnew: string[]) => {
            setAccount(accountnew[0]);
        })

        if (acc) {
            acc.innerText = "Connected";
        }

    }


    return (

        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span className="logo-text">Luw3</span>

            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                {Account && <li>{Account}</li>}

            </ul>


            <button className="connect-button but2" id='munde' onClick={ConnectMetamask}>Connect</button>
        </nav>
    );

};

export default Navbar;
