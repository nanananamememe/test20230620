// httpモジュールを読み込みます。これがWEBサーバーとなるオブジェクトです。
const http = require("http");

// createServerでWEBサーバを作成します。
const server = http.createServer((request, response) => {
    // ヘッダーを生成
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    // レスポンスボディを返します
    response.end("<h1>Hello World!</h1>");
});

// 3000番ポートで待ち受け
server.listen(3000);
