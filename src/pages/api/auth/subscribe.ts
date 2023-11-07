import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../services/stripe";

export async function async (req:NextApiRequest,res:NextApiResponse){
    if(req.method ==='POST'){
        const checkoutSession = await stripe
    }else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not Allowed')
    }
}