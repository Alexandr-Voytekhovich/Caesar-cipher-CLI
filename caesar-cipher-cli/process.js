process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
    process.stdout.write(chunk);
    process.stdin.resume()
});
