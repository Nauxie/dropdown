const data = [
  {
    title: 'Tag',
    options: [
      { id: 1, title: 'Oliver Hansen' },
      { id: 2, title: 'Van Henry' },
      { id: 3, title: 'April Tucker' },
      { id: 4, title: 'Ralph Hubbard' },
    ],
    multiselect: true,
  },
  {
    title: 'Age',
    options: [
      { id: 1, title: 'Twenty' },
      { id: 2, title: 'Twenty one' },
      { id: 3, title: 'Twenty one and a half' },
    ],
  },
  {
    title: 'Long List',
    options: [...Array(50).keys()].map((key) => ({
      id: key,
      title: key.toString(),
    })),
    multiselect: true,
  },
];

export default data;
