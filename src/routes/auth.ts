import express, { Router } from 'express';

const authRouter: Router = express.Router();

authRouter.get("/", (req, res) => {
  res.send("Hello from auth router!");
});

export default authRouter;
