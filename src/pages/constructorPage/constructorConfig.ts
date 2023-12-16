export const constructorOptions = [
  {
    id: 0,
    type: 'question',
    question: 'Укажите количество комнат',
    filter: 'objectType',
    variants: [
      { answer: 'Однокомнатная квартира', value: 'one-room' },
      { answer: 'Двухкомнатная квартира', value: 'two-room' },
      { answer: 'Трёхкомнатная квартира', value: 'three-room' },
    ],
  },
  {
    id: 1,
    type: 'question',
    question: 'Выберите желаемую дату сдачи дома',
    filter: 'completionDates',
    variants: [
      { answer: 'Дом уже сдан', value: ['0'] },
      { answer: 'Сдаётся в этому году', value: ['2023'] },
      { answer: 'Сдаётся в следующем году', value: ['2024'] },
      { answer: 'Сдаётся через год', value: ['2025'] },
    ],
  },
  {
    id: 2,
    type: 'question',
    question: 'Укажите желаемый бюджет',
    filter: 'maxPrice',
    variants: [
      { answer: 'До 3.000.000 рублей', value: 3 },
      { answer: 'До 5.000.000 рублей', value: 5 },
      { answer: 'До 9.000.000 рублей', value: 9 },
      { answer: 'До 13.000.000 рублей', value: 13 },
    ],
  },
];
