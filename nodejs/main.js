const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");

const url = require("url");

function templeteHtml(list, body) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>WEB1 - Welcome</title>
    <meta charset="utf-8" />
    <!--
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="/fetch.js"></script>
    -->
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
   ${body}
  </body>
</html>
`;
}
function templistList(files) {
  let list = `<ul>`;
  files.forEach(
    (file) => (list += `<li><a href="/?id=${file}">${file}</a></li>`)
  );
  list += `</ul>`;
  return list;
}
function pageWriter(response, template, order) {
  if (order == 200) {
    response.writeHead(200);
    response.end(template);
  } else {
    response.writeHead(404);
    response.end("not found");
  }
}

const server = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  if (pathname === "/") {
    let title = queryData.id;
    if (title === undefined) {
      // home dir area
      fs.readFile(`home/content`, "utf8", (err, content) => {
        fs.readdir("./data", (err, files) => {
          title = "Hello World!";
          let body = `<h2>${title}</h2><p>${content}</p>`;
          let list = templistList(files);
          let template = templeteHtml(list, body);
          pageWriter(response, template, 200);
        });
      });
    } else {
      // page area
      fs.readFile(`data/${title}`, "utf8", (err, content) => {
        fs.readdir("./data", (err, files) => {
          let body = `<h2>${title}</h2><p>${content}</p>`;
          let list = templistList(files);
          let template = templeteHtml(list, body);
          pageWriter(response, template, 200);
        });
      });
    }
  } else {
    pageWriter(response, "", 404);
  }
});
server.listen(port);
