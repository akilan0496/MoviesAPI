/*function route(urlPathName){
  console.log('Inside Route ---UR---'+urlPathName);
}

exports.route = route;

*/


function route(handle, pathname, response,postData) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response,postData);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Page not Found");
    response.end();
    //return "404 Page not Found";
  }
}
exports.route = route;
