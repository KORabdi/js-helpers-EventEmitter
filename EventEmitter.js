  /**
   * EventEmitter
   * @constructor
   */
  function EventEmitter() {
    this.subscriptions = [];
  }

  EventEmitter.prototype.subscribe = function (callback) {
    if (typeof callback === 'function') {
      var total = this.subscriptions.push(callback);
      var index = total - 1;
      var self = this;
      return {
        unsubscribe: function () {
          self.subscriptions.splice(index, 1);
        }
      }
    }
  };

  EventEmitter.prototype.next = function (data) {
    this.subscriptions.forEach(function (sub) {
      sub(data);
    });
  };

  EventEmitter.prototype.clear = function () {
    this.subscriptions = [];
  };
