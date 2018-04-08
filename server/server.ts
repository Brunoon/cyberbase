import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleWare from 'webpack-dev-middleware';
import * as path from 'path';

let app = express();

let webpackConfig = require('../../webpack.config');

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleWare(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../static/index.html'));
  console.log(req.hostname);
});


let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});