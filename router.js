function route(pathname){
  console.log('ABout to route a request for ' + pathname);
}
exports.route = route;

function start() {
  console.log('Request handler \'start\' was called');
}

function upload() {
  console.log('Request handler \'upload\' was called');
}

exports.start = start;
exports.upload = upload;
