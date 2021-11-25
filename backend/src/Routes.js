"use strict";
exports.__esModule = true;
var CommentController_1 = require("./controllers/CommentController");
var LoginController_1 = require("./controllers/LoginController");
var PREFIX = "/api";
var Routes = /** @class */ (function () {
    function Routes() {
        this.loginController = new LoginController_1["default"]();
        this.commentController = new CommentController_1["default"]();
    }
    Routes.prototype.get = function () {
        return [
            {
                path: "".concat(PREFIX, "/user/login"),
                method: "post",
                needAuth: false,
                handler: this.loginController.login
            },
            {
                path: "".concat(PREFIX, "/all-comments/:idUser"),
                method: "get",
                needAuth: true,
                handler: this.commentController.getAllComments
            },
            {
                path: "".concat(PREFIX, "/comments-day"),
                method: "get",
                needAuth: false,
                handler: this.commentController.getCommentsDay
            },
            {
                path: "".concat(PREFIX, "/comment"),
                method: "post",
                needAuth: true,
                handler: this.commentController.newComment
            },
            {
                path: "".concat(PREFIX, "/comment/:idComment"),
                method: "delete",
                needAuth: true,
                handler: this.commentController.deleteComment
            },
        ];
    };
    return Routes;
}());
exports["default"] = Routes;
