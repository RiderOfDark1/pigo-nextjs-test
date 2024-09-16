'use client';

import ProductAttributes from "@/components/ProductAttributes";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const page = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			try {
				const response = await fetch('/api/products');
				const data = await response.json();
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		}

		getProducts();
	}, []);

	return (
		<div className="p-10">
			<h1 className="text-left font-bold text-2xl">Products</h1>
			
			<button type="button" className="blue-gradient-monochrome">Add product</button>

			<div>
				<table 
					className="min-w-full text-sm font-light text-surface dark:text-white text-left mt-5">
					<thead
						class="border-b border-neutral-200 font-medium dark:border-white/10">
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Category</th>
							<th>Attributes</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{products.map((product, index) => (
							<tr 
								key={index}
								class="border-b border-neutral-200 dark:border-white/10 p-2">
								<td>{product.name}</td>						
								<td>{product.price}</td>						
								<td>{product.category.name}</td>
								<td>
									<ProductAttributes attributes={product.attributes}/>
								</td>
								<td>
									<Link href={''} className="pr-2">
										Edit
									</Link>
								
									<Link href={''}>
										Delete
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		
		</div>
	)
}

export default page
