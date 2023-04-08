import { NextApiRequest, NextApiResponse } from "next";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Web3 from "web3";
import tx from 'ethereumjs-tx'
import fs from 'fs'
import path from 'path'
import common from "ethereumjs-common";

dotenv.config();

const app = express()

app.use(helmet());
app.use(cors());
app.use(express.json());


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }
const id = req.query.id;
    return res.status(200).send(id);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}

