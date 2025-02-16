export const constructorOptions = [
  {
    id: 0,
    type: 'question',
    question: 'Укажите количество комнат',
    filter: 'objectType',
    variants: [
      { answer: 'Однокомнатная квартира', value: '1' },
      { answer: 'Двухкомнатная квартира', value: '2' },
      { answer: 'Трёхкомнатная квартира', value: '3' },
    ],
  },
  {
    id: 1,
    type: 'question',
    question: 'Выберите желаемую дату сдачи дома',
    filter: 'completionDates',
    variants: [
      { answer: 'Дом уже сдан', value: ['0'] },
      { answer: 'Сдаётся в этому году', value: ['2025'] },
      { answer: 'Сдаётся в следующем году', value: ['2026'] },
      { answer: 'Сдаётся через год', value: ['2027'] },
    ],
  },
  {
    id: 2,
    type: 'question',
    question: 'Укажите желаемый бюджет',
    filter: 'maxPrice',
    variants: [
      { answer: 'До 5.000.000 рублей', value: 5 },
      { answer: 'До 10.000.000 рублей', value: 10 },
      { answer: 'До 15.000.000 рублей', value: 15 },
      { answer: 'До 25.000.000 рублей', value: 25 },
    ],
  },
];
