import React, { useEffect } from 'react';
import { SelectCardProps } from './Interfaces';

export default function SelectCard({
  sources,
  selectedCard,
  onSelectCard,
}: SelectCardProps) {
  const cards: any = sources
    .filter((item: any) => 
      item.view.group === 'card' &&
      item.installments.enabled === true &&
      Array.isArray(item.installments.list) &&
      item.installments.list.length !== 0
  )
    .map((item: any) => item.source.name);

  useEffect(() => {
    if (cards.length > 0 && !selectedCard) {
      onSelectCard(cards[0]);
    }
  }, [cards, selectedCard, onSelectCard]);

  const handleSelectCard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetCard = e.target.value;
    onSelectCard(targetCard);
  };

  return (
    <div className="financeWidget-select">
      <label>
        Selecciona la tarjeta
      </label>
      <select 
        value={selectedCard} 
        onChange={handleSelectCard}
      >
        {cards.map((card: any) => (
          <option key={card} value={card}>
            {card}
          </option>
        ))}
      </select>
    </div>
  );
}