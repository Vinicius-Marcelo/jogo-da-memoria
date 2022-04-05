import './style.css';
import { useState } from 'react';
import Menu from '../../components/menu';
import Card from '../../components/card';
import cards from '../../cards';
import Parabens from '../../assets/congrats.png';

function Main() {
  const [arrayCards, setArrayCards] = useState([...cards]);

  return (
    <div className='container'>
      <div className='container-menu'>
        <Menu cards={cards} setArrayCards={setArrayCards} />
      </div>
      <div className='container-main'>
        <div className='container-cards' style={{ 'justifyContent': `${arrayCards.length ? 'flex-start' : 'center'}` }}>
          {arrayCards.length ? arrayCards.map((card) =>
            <Card key={card.id} card={card} arrayCards={arrayCards} setArrayCards={setArrayCards} />
          ) : <img src={Parabens} alt="parabens" className='parabens' />}
        </div>
      </div>
    </div>
  );
}

export default Main;
