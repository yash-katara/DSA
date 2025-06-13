// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/poll'){
//         setTimeout(()=>{
//             res.writeHead(200, {
//                 'Content-Type': 'application/json'});
//         });
//         res.end(
//             JSON.stringify({ 
//             message: `Hello from long polling! ${new Date().toISOString}`, 
//     })
// ); 
// }, 3000);


// else{
//     res.writeHead(200);
//     res.end('Welcome to the long polling server!');
//     }
// });


const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/poll') {
 
    setTimeout(() => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify({
          message: `Hello from long polling! ${new Date().toISOString()}`
        })
      );
    }, 3000); // 3 second delay
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the long polling server!');
  }
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
