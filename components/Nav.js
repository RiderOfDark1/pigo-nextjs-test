import Link from "next/link"

const Nav = () => {
  return (
	<div className="bg-white flex space-x-4 p-4 mb-3">
		<Link className="text-black font-semibold" href="/home">Home</Link>
		<Link className="text-black font-semibold" href="/products">Products</Link>
	</div>
  )
}

export default Nav
