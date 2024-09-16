import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
	try {
		const products = await prisma.product.findMany({
			include: {
			  category: true,
			  attributes: {
				include: {
					attribute: true
				}
			  }
			}
		});
		console.log(products);
		return new Response(JSON.stringify(products), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		})

	} catch (error) {
		return new Response(JSON.stringify({ error: 'An error occurred while fetching products.' }), {
			status: 500,
			headers: {
			  'Content-Type': 'application/json',
			},
		});
	} finally {
		await prisma.$disconnect();
	}
}