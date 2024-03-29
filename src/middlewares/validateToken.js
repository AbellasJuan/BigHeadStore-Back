import db from "../database.js";

export async function validateToken(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");
  
  if (!token) {
    return res.sendStatus(401);
  }

  const session = await db.collection("session").findOne({ token });
  if (!session) {
    return res.sendStatus(401);
  }

  const user = await db.collection("users").findOne({ _id: session.userId });
  if (!user) {
    return res.sendStatus(401);
  }

  res.locals.user = user;
  next();
}