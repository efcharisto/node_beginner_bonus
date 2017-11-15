function route(handle, pathname){
  console.log('ABout to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function'){
    return handle[pathname]();
  } else{
    console.log('no request handler found for ' + pathname);
    return '404 not found';
  }
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
