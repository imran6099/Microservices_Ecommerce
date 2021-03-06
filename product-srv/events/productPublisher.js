const nats = require("node-nats-streaming");
const stand = nats.connect("nice", "product-publish", {
  url: "http://nats-srv:4222",
});

stand.on("connect", async () => {
  console.log("Product Publisher contected to NATS");
});

class Publisher {
  constructor(subject, client) {
    this.subject = subject;
    this.client = stand;
  }

  publish(data) {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, data, (err) => {
        if (err) {
          return reject(err);
        }
        console.log("Event published to subject", this.subject);
        resolve();
      });
    });
  }
}
module.exports = class ProductCreatedPublisher extends Publisher {
  constructor(subject, data) {
    super(subject, data);
  }
};
module.exports = class ProductUpdatedPublisher extends Publisher {
  constructor(subject, data) {
    super(subject, data);
  }
};
module.exports = class ProductRemovedPublisher extends Publisher {
  constructor(subject, data) {
    super(subject, data);
  }
};