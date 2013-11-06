// PredictionIO namespace encapsulates this SDK
PredictionIO = {};
PredictionIO.SDK_VERSION = '0.1';

PredictionIO.Client = function(options) {

  // PredictionIO endpoint
  this.apiurl = options.apiurl || "http://localhost:8000";
  this.appkey = options.appkey
  this.defaultParameters = {
    pio_appkey: this.appkey
  };
};

PredictionIO.Client.prototype.createUser = function(params, callback) {
  check(params.pio_uid, String);
  return Meteor.http.post(this.apiurl + '/users.json', {
    params: _(this.defaultParameters).extend(params)
  }, callback);
};

PredictionIO.Client.prototype.getUser = function(id, callback) {
  check(id, String);
  return Meteor.http.get(this.apiurl + '/users/' + id + '.json', {
    params: this.defaultParameters
  }, callback);
};

PredictionIO.Client.prototype.deleteUser = function(id, callback) {
  check(id, String);
  return Meteor.http.del(this.apiurl + '/users/' + id + '.json', {
    params: this.defaultParameters
  }, callback);
};

PredictionIO.Client.prototype.createItem = function(params, callback) {
  check(params.pio_iid, String);
  check(params.pio_itypes, String);
  return Meteor.http.post(this.apiurl + '/items.json', {
    params: _(this.defaultParameters).extend(params)
  }, callback);
};

PredictionIO.Client.prototype.getItem = function(id, callback) {
  check(id, String);
  return Meteor.http.get(this.apiurl + '/items/' + id + '.json', {
    params: this.defaultParameters
  }, callback);
};

PredictionIO.Client.prototype.deleteItem = function(id, callback) {
  check(id, String);
  return Meteor.http.del(this.apiurl + '/items/' + id + '.json', {
    params: this.defaultParameters
  }, callback);
};

PredictionIO.Client.prototype.recordActionOnItem = function(params, callback) {
  check(params.pio_iid, String);
  check(params.pio_uid, String);
  check(params.pio_action, String);
  check(params.pio_rate, Number);
  return Meteor.http.post(this.apiurl + '/actions/u2i.json', {
    params: _(this.defaultParameters).extend(params)
  }, callback);
};

PredictionIO.Client.prototype.getItemTopNRecommandations = function(params, callback) {
  check(params.engine_name, String);
  check(params.pio_uid, String);
  check(params.pio_n, Number);
  return Meteor.http.get(this.apiurl + '/engines/itemrec/' + params.engine_name + '/topn.json', {
    params: _(this.defaultParameters).extend(params)
  }, callback);
};

PredictionIO.Client.prototype.getItemTopNSimilarities = function(params, callback) {
  check(params.engine_name, String);
  check(params.pio_iid, String);
  check(params.pio_n, Number);
  return Meteor.http.get(this.apiurl + '/engines/itemsim/' + params.engine_name + '/topn.json', {
    params: _(this.defaultParameters).extend(params)
  }, callback);
};
