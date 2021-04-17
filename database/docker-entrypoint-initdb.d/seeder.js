try {
  db.users.insertMany([
    { _id: '6061e09f3faa0d1629466480', name: 'Marco', surname: 'Rossi', img: 'https://i.stack.imgur.com/S6a50.jpg', number: '+39 1281143962', email: 'marco.rossi@gmail.com' },
    { _id: '6061e09f3faa0d1629466481', name: 'Giulio', surname: 'Cesare', img: 'https://i.stack.imgur.com/oTrij.png', number: '+39 7814143061', email: 'giulio.cesare@gmail.com' }
  ]);

  db.rides.insertMany([
    { _id: '6061dfce0e828b14a3614fc4', user_id: '6061e09f3faa0d1629466480', price: 1789, destination_address: 'Torino, Via Accademia delle Scienze 6', departure_address: 'Torino, Via Montebello 20', date: new Date('2021-01-14') },
    { _id: '6061dfce0e828b14a3614fc5', user_id: '6061e09f3faa0d1629466480', price: 4500, destination_address: 'Torino, Via Garibaldi 3', departure_address: 'Torino, Via Pietro Micca 42', date: new Date('2021-02-02') },
    { _id: '6061dfce0e828b14a3614fc6', user_id: '6061e09f3faa0d1629466480', price: 2116, destination_address: 'Torino, Via Roma 17', departure_address: 'Torino, Via Garibaldi 50', date: new Date('2021-04-20') },
    { _id: '6061dfce0e828b14a3614fc7', user_id: '6061e09f3faa0d1629466481', price: 1345, destination_address: 'Milano, Via Aldo Moro 3', departure_address: 'Milano, Via Alessandro 42', date: new Date('2021-01-14') }
  ])
} catch (e) {
  print(e);
}