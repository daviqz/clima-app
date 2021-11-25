import pool from "../db";

export default class CommentService {
  public async getAllComments(idUser: number) {
    const comments = await pool.query(
      `SELECT 
        id,  
        comment,
        image_url,
        to_char(created_at, 'DD/MM/YYYY') AS created_at
      FROM
        comments
      WHERE id_user = ${idUser}
      ORDER BY created_at`
    );
    return comments.rows;
  }

  public async getCommentsDay() {
    const comments = await pool.query(
      `SELECT 
        u.name as user_name,
        c.comment,
        c.image_url
      FROM
        comments c 
      LEFT JOIN users u ON c.id_user = u.id
        WHERE DATE(c.created_at) = DATE(NOW())
        ORDER BY c.created_at DESC, u.name ASC
      `
    );
    return comments.rows;
  }

  public async newComment(
    id_user: number,
    comment: string,
    image_url: string | undefined
  ) {
    await pool.query(
      `INSERT INTO comments (id_user, comment, image_url) VALUES (${id_user}, '${comment}', '${image_url}')`
    );
  }

  public async deleteComment(idComment: number) {
    await pool.query(`DELETE FROM comments WHERE id = ${idComment}`);
  }
}
