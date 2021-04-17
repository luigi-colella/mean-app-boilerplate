try {
  db.users.insertMany([
    { _id: '6061e09f3faa0d1629466480', name: 'Marco', surname: 'Rossi', img: 'https://i.stack.imgur.com/S6a50.jpg', number: '+39 1281143962', email: 'marco.rossi@gmail.com' },
    { _id: '6061e09f3faa0d1629466481', name: 'Giulio', surname: 'Cesare', img: 'https://i.stack.imgur.com/oTrij.png', number: '+39 7814143061', email: 'giulio.cesare@gmail.com' }
  ]);
} catch (e) {
  print(e);
}