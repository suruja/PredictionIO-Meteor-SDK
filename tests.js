var APPURL = process.env.APPURL || "http://localhost:8000";
var APPKEY = process.env.APPKEY || "ciDohQ9tg7q2drW0mLDbxGXizfepDmWZms4wVMKI28y8SebQQFCCcqs0yEvK7Efm"

var predictionio = new PredictionIO.Client({
  apiurl: APPURL,
  appkey: APPKEY
})

Tinytest.add('Initialize PredictionIO SDK', function (test) {
  test.equal(predictionio.apiurl, APPURL);
  test.equal(predictionio.appkey, APPKEY);
});

Tinytest.add('Create user', function (test) {
  var response = predictionio.createUser({ pio_uid: "123" });
  test.equal(response.statusCode, 201);
});

Tinytest.add('Get user', function (test) {
  var response = predictionio.getUser("123");
  test.equal(response.data.pio_uid, "123");
});

Tinytest.add('Delete user', function (test) {
  var response = predictionio.deleteUser("123");
  test.equal(response.statusCode, 200);
});

Tinytest.add('Create item', function (test) {
  var response = predictionio.createItem({ pio_iid: "456", pio_itypes: "fake" });
  test.equal(response.statusCode, 201);
});

Tinytest.add('Get item', function (test) {
  var response = predictionio.getItem("456");
  test.equal(response.data.pio_iid, "456");
});

Tinytest.add('Delete item', function (test) {
  var response = predictionio.deleteItem("456");
  test.equal(response.statusCode, 200);
});

Tinytest.add('Record action on item', function (test) {
  var response = predictionio.recordActionOnItem({
    pio_uid: "123",
    pio_iid: "456",
    pio_action: "rate",
    pio_rate: 1
  });
  test.equal(response.statusCode, 201);
});

Tinytest.add('Get item top N recommendations', function (test) {
  var response = predictionio.getItemTopNRecommandations({
    engine_name: "recommendation-engine",
    pio_uid: "1",
    pio_n: 1
  }, function(e) {
    test.equal(e.response.data.message, "Cannot find recommendation for user.");
  });
});

Tinytest.add('Get item top N similarities', function (test) {
  var response = predictionio.getItemTopNSimilarities({
    engine_name: "similarity-engine",
    pio_iid: "1",
    pio_n: 1
  }, function(e) {
    test.equal(e.response.data.message, "Cannot find similar items for item.");
  });
});
