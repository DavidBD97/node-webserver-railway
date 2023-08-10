const http = require('http');


http.createServer((req, res)=>{

    console.log(req);

    res.setHeader('Content-Dispositon', 'attachment; filename=lista.cvs');
    res.writeHead(200,{'Content-Type': 'application/csv'});
  
  
    res.write('id, nombre\n');
    res.write('1, David\n');
    res.write('2, Laura\n');
    res.write('3, Ale\n');
    res.write('4, Yessi\n');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080);
    