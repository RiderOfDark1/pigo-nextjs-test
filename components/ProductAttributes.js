
const ProductAttributes = ({attributes}) => {
	const attributesString = attributes
    	.map(attr => `${attr.attribute.name}: ${attr.attribute.value}`)
    	.join(', ');
	return <div>{attributesString}</div>;
}

export default ProductAttributes;
