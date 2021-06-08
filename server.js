const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});
wsServer.on('connection', onConnect);
function onConnect(wsClient) {
    wsClient.on('close', function() {
        console.log('Пользователь отключился');
    });

    wsClient.on('message', function(message) {
        console.log('Пользователь написал сообщение -', message);
        try {
            message
            ? wsClient.send(`agilli ol ${message}`)
            :console.log('Неизвестная команда');
        } catch (error) {
            console.log('Ошибка', error);
        }
    });
}

console.log('Сервер запущен на 9000 порту');