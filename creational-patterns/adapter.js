class IAdapter {
  connect() {}
}

class Adaptee {
  constructor({ url, port }) {
    this.url = url;
    this.port = port;
  }

  connectToOldPort() {
    console.log(`connecting to the old port ${this.port}`);
  }
}

class Adapter extends Adaptee {
  constructor(opts) {
    super(opts);
  }

   
  // Implement method based on IAdapter interface
  connect() {
    this.connectToOldPort();
    console.log(`inside new connect ${this.port}`);
  }
}


// Client would like to use connectToOldPort but they're given IAdapter
// instead of using directly Adaptee
const client = new Adapter({ url: 'localhost', port: 8000 });
client.connect();