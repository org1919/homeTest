const express = require('express')
const app = express();

app.get('/user', (request, response) => {
    response.send('4000端口')
})

app.listen(4000, () => {
    console.log('4000端口已经启动啦......');

})