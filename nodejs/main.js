const http = require("http");
const port = 3000;
const fs = require("fs");
const qs = require("querystring");
const url = require("url");
const templete = require("./lib/templete.js");
let path = require("path");
let sanitizeHtml = require("sanitize-html");

function pageWriter(response, template, order) {
  if (order == 200) {
    response.writeHead(200);
    response.end(template);
  } else if (order == "redirect") {
    response.writeHead(302, { Location: `/?id=${template}` });
    response.end();
  } else {
    response.writeHead(404);
    response.end("not found");
  }
}

const server = http.createServer((request, response) => {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;
  console.log(title);

  if (pathname === "/") {
    if (title === undefined) {
      // home dir area
      fs.readFile(`home/content`, "utf8", (err, content) => {
        fs.readdir("./data", (err, files) => {
          title = "Hello World!";
          let sanitizedContent = sanitizeHtml(content);
          let body = `<h2>${title}</h2><p>${sanitizedContent}</p>`;
          let lists = templete.list(files);
          let html = templete.html(lists, body, `<a href="/create">create</a>`);
          pageWriter(response, html, 200);
        });
      });
    } else {
      // page area
      let filteredId = path.parse(title).base;
      fs.readFile(`data/${filteredId}`, "utf8", (err, content) => {
        fs.readdir("./data", (err, files) => {
          let sanitizedTitle = sanitizeHtml(title);
          let sanitizedContent = sanitizeHtml(content);

          let body = `<h2>${sanitizedTitle}</h2><p>${sanitizedContent}</p>`;
          let lists = templete.list(files);
          let html = templete.html(
            lists,
            body,
            `<a href="/create">create</a>
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post" onsubmit="if(!confirm('Do you wanna submit this form?')){return false;}">
            <input type="hidden" name="id" value="${sanitizedTitle}"/>
            <input type="submit" value="delete">
            </form>
            `
          );
          pageWriter(response, html, 200);
        });
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", (err, files) => {
      title = "WEB - create";
      let body = `
      <form action="/create_process" method ="post">
      <p>
        <input type="text" name="title" placeholder="title"/>
        </p>
        <p>
        <textarea name="content" placeholder="content"></textarea>
        </p>
        <p>
        <input type="submit"/>
        </p>
      </form>
      `;
      let lists = templete.list(files);
      let html = templete.html(lists, body, ``);
      pageWriter(response, html, 200);
    });
  } else if (pathname === "/create_process") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);
      let title = post.title;
      let content = post.content;

      fs.writeFile(`./data/${title}`, content, "utf-8", () => {
        console.log("file is saved");
        pageWriter(response, title, "redirect");
      });
    });
  } else if (pathname === "/update") {
    let filteredId = path.parse(title).base;
    fs.readFile(`data/${filteredId}`, "utf8", (err, content) => {
      fs.readdir("./data", (err, files) => {
        let sanitizedTitle = sanitizeHtml(title);
        let sanitizedContent = sanitizeHtml(content);
        let body = `
        <form action="/update_process" method ="post">
        <input type="hidden" name="id" value="${sanitizedTitle}" />
      <p>
        <input type="text" name="title" placeholder="title" value="${sanitizedTitle}"/>
        </p>
        <p>
        <textarea name="content" placeholder="content">${sanitizedContent}</textarea>
        </p>
        <p>
        <input type="submit"/>
        </p>
      </form>
        `;
        let lists = templete.list(files);
        let html = templete.html(lists, body, ``);
        pageWriter(response, html, 200);
      });
    });
  } else if (pathname === "/update_process") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let post = qs.parse(body);

      let title = post.title;
      let content = post.content;
      let id = post.id;
      fs.rename(`./data/${id}`, `./data/${title}`, () => {
        console.log("file name changed");
        fs.writeFile(`./data/${title}`, content, "utf-8", () => {
          console.log("file content updated");
          pageWriter(response, title, "redirect");
        });
      });
    });
  } else if (pathname === "/delete_process") {
    let body = "";
    request.on("data", (data) => {
      body += data;
    });
    request.on("end", () => {
      let id = qs.parse(body).id;
      let filteredId = path.parse(id).base;
      fs.unlink(`./data/${filteredId}`, () => {
        console.log("this file was deleted");
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    pageWriter(response, "", 404);
  }
});
server.listen(port);
