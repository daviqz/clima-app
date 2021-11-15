import { Request, Response } from "express";
import CommentService from "../services/CommentService";
import multer from "multer";

export default class CommentController {
  public async getAllComments(request: Request, response: Response) {
    const { idUser } = request.params;
    try {
      const commentService = new CommentService();
      const data = await commentService.getAllComments(Number(idUser));
      const filteredData: any = {};
      data.forEach((it: any) => {
        if (filteredData[it.created_at]) {
          filteredData[it.created_at].push(it);
        } else {
          filteredData[it.created_at] = [it];
        }
      });
      return response.status(200).json(filteredData);
    } catch (e) {
      console.error(e);
      response.status(500).json({ message: "Serviço indisponível." });
    }
  }

  public async getCommentsDay(request: Request, response: Response) {
    try {
      const commentService = new CommentService();
      const data = await commentService.getCommentsDay();
      return response.status(200).json(data);
    } catch (e) {
      console.error(e);
      response.status(500).json({ message: "Serviço indisponível." });
    }
  }

  public async newComment(request: Request, response: Response) {
    const upload = multer({});
    upload.single("file")(request, response, async () => {
      const image_url = request?.file?.buffer.toString("base64");
      const { id_user, comment } = request.body;
      const commentService = new CommentService();
      await commentService.newComment(
        Number(id_user),
        comment,
        `data:image/png;base64, ${image_url}`
      );
      return response.status(200).json({
        message: "Comentário cadastrado com sucesso!",
      });
    });
  }

  public async deleteComment(request: Request, response: Response) {
    const { idComment } = request.params;
    try {
      const commentService = new CommentService();
      await commentService.deleteComment(Number(idComment));
      return response
        .status(200)
        .json({ message: "Comentário excluído com sucesso!" });
    } catch (e) {
      console.error(e);
      response.status(500).json({ message: "Serviço indisponível." });
    }
  }
}
