// JSON
const mk = require('./data/mk_characters.json');


// Modules
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const names = mk.map(item => item.name);
    const realms = mk.map(item => item.realm);


    const listItems = names.map((name, index) => {
        return `<li style="list-style: none"> ${name} do reino ${realms[index]}</li>`;
    }).join('');

    const list = `<ul>${listItems}</ul>`;

    res.send(list);
});


app.listen(port, () => {
    console.log(`listening on port' ${port}`);	
})