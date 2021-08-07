const templete = {
  html: function (list, body, control) {
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
        ${control}
       ${body}
      </body>
    </html>
    `;
  },
  list: function (files) {
    let list = `<ul>`;
    files.forEach(
      (file) => (list += `<li><a href="/?id=${file}">${file}</a></li>`)
    );
    list += `</ul>`;
    return list;
  },
};

module.exports = templete;
