const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	// Create Categories
	const electronicsCategory = await prisma.category.create({
	  data: {
		name: 'Electronics',
	  },
	});
  
	const clothingCategory = await prisma.category.create({
	  data: {
		name: 'Clothing',
	  },
	});
  
	// Create Attributes
	const sizeAttribute = await prisma.attribute.create({
	  data: {
		name: 'Size',
		value: 'S',
	  },
	});

	const wifiAttribute = await prisma.attribute.create({
		data: {
		  name: 'Wifi',
		  value: 'True',
		},
	});
  
	const colorAttribute = await prisma.attribute.create({
	  data: {
		name: 'Color',
		value: 'Red',
	  },
	});
  
	// Create Products
	const tShirt = await prisma.product.create({
	  data: {
		name: 'T-Shirt',
		price: 19.99,
		description: 'A comfortable T-Shirt',
		categoryId: clothingCategory.id,
		attributes: {
		  create: [
			{
			  attributeId: sizeAttribute.id,
			  assignedAt: new Date(),
			},
			{
			  attributeId: colorAttribute.id,
			  assignedAt: new Date(),
			},
		  ],
		},
	  },
	});

	const microwave = await prisma.product.create({
		data: {
		  name: 'Microwave',
		  price: 84.99,
		  description: 'A nice microwave',
		  categoryId: electronicsCategory.id,
		  attributes: {
			create: [
			  {
				attributeId: wifiAttribute.id,
				assignedAt: new Date(),
			  },
			],
		  },
		},
	  });
  
	console.log('Seed data has been added.');
}
  
  main()
  	.catch(e => {
	  console.error(e);
	  process.exit(1);
	})
	.finally(async () => {
	  await prisma.$disconnect();
	});