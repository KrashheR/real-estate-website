export const constructorOptions = [
  {
    type:'question',
    question: 'Укажите количество комнат',
    variants: [
      { answer: 'Однокомнатная квартира', value: '1' },
      { answer: 'Двухкомнатная квартира', value: '2' },
      { answer: 'Трёхкомнатная квартира', value: '3' },
    ],
  },
  {
    type:'question',
    question: 'Выберите желаемую дату сдачи дома',
    variants: [
      { answer: 'Дом уже сдан', value: '0' },
      { answer: '2023', value: '2023' },
      { answer: '2024', value: '2024' },
      { answer: '2025', value: '2025' },
    ],
  },
  {
    type:'question',
    question: 'Укажите желаемый бюджет',
    variants: [
      { answer: 'До 3.000.000 рублей', value: '3' },
      { answer: 'До 5.000.000 рублей', value: '5' },
      { answer: 'До 9.000.000 рублей', value: '9' },
      { answer: 'До 13.000.000 рублей', value: '13' },
    ],
  },
  {
    type:'result',
    question: 'Вам подходят следующие дома',
  },
];
