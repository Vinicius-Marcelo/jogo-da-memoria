import './style.css';
import CardBack from '../../assets/card-back.png';

function Card({ card, arrayCards, setArrayCards }) {
    function handleTurned() {
        const localCards = [...arrayCards];
        const atualCard = localCards.find(item => item.id === card.id);
        const verdadeiros = localCards.filter(item => item.turned);
        if (verdadeiros.length > 1) return;
        if (verdadeiros.length && card.nome === verdadeiros[0].nome) {
            atualCard.turned = !atualCard.turned;
            setArrayCards(localCards);
            if (atualCard.id === verdadeiros[0].id) return;
            setTimeout(() => {
                const removerCards = localCards.filter((item) =>
                    item.id !== atualCard.id && item.id !== verdadeiros[0].id);
                setArrayCards(removerCards);
            }, 1000);
            return;
        };
        atualCard.turned = !atualCard.turned;
        setArrayCards(localCards);
        if (verdadeiros.length) {
            setTimeout(() => {
                localCards.forEach((item) => {
                    item.turned = false;
                })
                setArrayCards([...localCards]);
            }, 1000);
        }
    }

    return (
        <img src={card.turned ? card.image : CardBack} alt="card" className='card' onClick={() => handleTurned()} />
    )
}

export default Card;