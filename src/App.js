import Card from './components/Card';
import './App.css'
import Navbar from './components/Navbar';
import pizzam from './immagini/pizzam.jpg';
import pizzap from './immagini/pizzap.jpg';
import pizzacarbone from './immagini/pizzacarbone.jpg';
import pizzapeper from './immagini/pizzapeper.jpg';
import pizzas from './immagini/pizzas.jpg';
import pizzaton from './immagini/pizzaton.jpg';
import React, { useState } from 'react';

function App() {
  const [cards, setCards] = useState([
    { id: 0, nome: "Margherita", prezzo: 5.99, immagine: pizzam, quantità: 0 },
    { id: 1, nome: "Prosciutto crudo", prezzo: 7.99, immagine: pizzap, quantità: 0 },
    { id: 2, nome: "Carbonata", prezzo: 9.99, immagine: pizzacarbone, quantità: 0 },
    { id: 3, nome: "Peperoni", prezzo: 6.99, immagine: pizzapeper, quantità: 0 },
    { id: 4, nome: "Salamino", prezzo: 5.99, immagine: pizzas, quantità: 0 },
    { id: 5, nome: "Tonno", prezzo: 6.99, immagine: pizzaton, quantità: 0 },
  ]);

  const handleDelete = cardId => {


    function stabilisci(card) {
      if (card.id === cardId) {
        return false
      } else {

        return true
      }

    }
    function filtro(cards) {
      return cards.filter(stabilisci)
    }

    setCards(filtro)
  }


  return (
    <>
      <Navbar />
      <div className="Container">
        <h2 className="clearfix" style={{ textAlign: 'center' }}>Cosa desidera Ordinare?</h2>
        <hr />
        <div className='row'>
          {cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              nome={card.nome}
              prezzo={card.prezzo}
              immagine={card.immagine}
              onDelete={handleDelete} 
             />

          ))}
        </div>
      </div>
    </>
  );
}

export default App;
