import React from 'react';

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
    <div className="mt-4 ">
      <label className="block text-black dark:text-mobbexWhite text-base font-sans font-medium mb-2">
        Selecciona la tarjeta:
      </label>
      <select
        value={selectedCard}
        onChange={handleSelectCard}
        className="p-2 bg-mobbexWhite text-black text-sm font-sans rounded-lg shadow w-full"
      >
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

interface SelectCardProps {
  sources: any[];
  selectedCard: string;
  onSelectCard: (card: string) => void;
}
