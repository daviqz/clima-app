import CommentController from "./controllers/CommentController";
import LoginController from "./controllers/LoginController";

const PREFIX = "/api";

export default class Routes {
  public loginController: LoginController;
  public commentController: CommentController;

  constructor() {
    this.loginController = new LoginController();
    this.commentController = new CommentController();
  }

  public get() {
    return [
      {
        path: `${PREFIX}/user/login`,
        method: "post",
        needAuth: false,
        handler: this.loginController.login,
      },
      {
        path: `${PREFIX}/all-comments/:idUser`,
        method: "get",
        needAuth: true,
        handler: this.commentController.getAllComments,
      },
      {
        path: `${PREFIX}/comments-day`,
        method: "get",
        needAuth: false,
        handler: this.commentController.getCommentsDay,
      },
      {
        path: `${PREFIX}/comment`,
        method: "post",
        needAuth: true,
        handler: this.commentController.newComment,
      },
      {
        path: `${PREFIX}/comment/:idComment`,
        method: "delete",
        needAuth: true,
        handler: this.commentController.deleteComment,
      },
    ];
  }
}
