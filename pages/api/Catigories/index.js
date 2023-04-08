import { Catigories } from "../Data";

export default function handler(req, res) {
  res.status(200).json(Catigories);
}
