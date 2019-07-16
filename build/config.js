"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var env = process.env;
var _default = {
  mongodbUri: "mongodb://localhost:27017/test",
  nodeEnv: env.NODE_ENV || "development",
  port: env.PORT || 3000,
  host: env.HOST || "0.0.0.0",

  get serverUrl() {
    //may need to change to https
    return "http://".concat(this.host, ":").concat(this.port);
  }

};
exports["default"] = _default;
//# sourceMappingURL=config.js.map