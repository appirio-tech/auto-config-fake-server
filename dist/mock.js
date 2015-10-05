(function() {
  var fixture, fixtures, key, ref, refreshToken, token;

  AutoConfigFakeServer.init();

  AutoConfigFakeServer.fakeServer.autoRespond = true;

  fixtures = [];

  ref = window.FIXTURES;
  for (key in ref) {
    fixture = ref[key];
    fixtures.push(fixture);
  }

  AutoConfigFakeServer.consume(fixtures);

  token = '"yyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS50b3Bjb2Rlci1kZXYuY29tIiwiZXhwIjoxNDMzMjcxNzYwLCJ1c2VySWQiOiI0MDEzNTUxNiIsImlhdCI6MTQzMzI3MTE2MCwianRpIjoiMDZhNzVjM2EtMTQ0MC00MWE3LTk5N2YtZmFmMGVjZjFmOGM1In0.okSjl5KOmGQ6hJEoQxk4SVkFra65_Id6KUQGdAVmJNe"';

  refreshToken = '"dGjFxqWsIXqptI2JllnmactleKODbd3UqWAvdjpjHsNqQ"';

  localStorage.setItem('userJWTToken', token);

  localStorage.setItem('userRefreshJWTToken', token);

}).call(this);
