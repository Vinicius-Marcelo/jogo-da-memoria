import './style.css';
import logo from '../../assets/logo.svg'

function Menu({ setArrayCards, cards }) {
    function handleReset() {
        cards.forEach(card => {
            card.turned = false;
        });
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        setArrayCards(cards);
    }
    return (
        <div className='menu'>
            <img src={logo} alt="logo" />
            <button className='btn-reset' onClick={() => handleReset()}>
                RESET
            </button>
        </div>
    )
}
export default Menu;