const data = [
  {
    title: 'Tag',
    options: [
      { id: 0, title: 'Oliver Hansen' },
      { id: 1, title: 'Van Henry' },
      { id: 2, title: 'April Tucker' },
      { id: 3, title: 'Ralph Hubbard' },
    ],
    multiselect: true,
  },
  {
    title: 'Age',
    options: [
      { id: 0, title: 'Twenty' },
      { id: 1, title: 'Twenty one' },
      { id: 2, title: 'Twenty one and a half' },
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
