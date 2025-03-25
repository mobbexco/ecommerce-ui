import React from 'react';
import { SelectCardProps } from './Interfaces';

export default function SelectCard({
  sources,
  selectedCard,
  onSelectCard,
}: SelectCardProps) {
  const handleSelectCard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetCard = e.target.value;
    onSelectCard(targetCard);
  };

  const cards: any = sources
    .filter((item: any) => item.view.group === 'card')
    .map((item: any) => item.source.name);

  return (
    <div className="financeWidget-select">
      <label>Selecciona la tarjeta:</label>
      <select value={selectedCard} onChange={handleSelectCard}>
        <option value="">Selecciona una tarjeta</option>
        {cards.map((card: any) => (
          <option key={card} value={card}>
            {card}
          </option>
        ))}
      </select>
    </div>
  );
}