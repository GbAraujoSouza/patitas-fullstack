import { Prisma, PrismaClient } from '@prisma/client';
import { Request, Response, response } from 'express';
const prisma = new PrismaClient();

class ProductController {
  async create(request: Request, response: Response) {
    try {
      const { name, type } = request.body;
      const price = Number(request.body.price);
      const productInput: Prisma.ProductCreateInput = {
        name,
        price,
        type,
      };

      const product = await prisma.product.create({
        data: productInput,
      });

      return response.status(201).json(product);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async readAll(request: Request, response: Response) {
    try {
      const products = await prisma.product.findMany();
      return response.status(201).json(products);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export default new ProductController();
