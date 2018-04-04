import * as express from 'express';
import * as path from 'path';
let app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../static/index.html'));
  console.log(req.hostname);
});

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});