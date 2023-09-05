export const pets = [
  {
    id: 123,
    ownerId: '123',
    petName: {
      text: 'Paulio',
      public: true,
    },
    petImage: {
      image: '/assets/dog.png',
      public: true,
    },
    dob: {
      birthday: '14/10/2020',
      public: true,
    },
    breed: {
      breed: 'Padenco',
      public: true,
    },
    color: {
      color: 'Brown',
      public: true,
    },
    homeAddress: {
      address: '123 Null, Spain',
      public: true,
    },
    what3Words: {
      w3w: 'apple.bannana.grape',
      public: true,
    },
    message: {
      message: `Hello, you've found Paulio!`,
      public: true,
    },
    scanHistory: [
      {
        _id: '0',
        dateTime: '04/12/2019 at 22:43',
        coordinates: '-52.922312, 15.023212',
        message: 'Your dog keeps eating my cake!',
        scannerName: 'Mike',
      },
      {
        _id: '1',
        dateTime: '04/12/2023 at 01:43',
        coordinates: '-52.922312, 15.023212',
        message: 'Your dog keeps eating my cake!',
        scannerName: 'Mike',
      },
      {
        _id: '2',
        dateTime: '04/12/2023 at 13:43',
        coordinates: '-52.922312, 15.023212',
        message: 'Your dog keeps eating my cake!',
        scannerName: 'Mike',
      }
    ]
  },

]