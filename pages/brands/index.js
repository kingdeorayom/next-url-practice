import Navbar from '@/components/Navbar'
import Link from 'next/link'

// Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {

//     const response = await fetch('http://localhost:3001/brands');
//     const brands = await response.json();

//     const paths = brands.map(brand => {
//         return {
//             params: { id: brand._id.toString() }
//         }
//     })

//     return {
//         paths: paths,
//         fallback: false, // can also be true or 'blocking'
//     };
// }

// fetch brands

export async function getStaticProps({ context }) {

    const response = await fetch('http://localhost:3001/brands');
    const brands = await response.json();

    return {
        props: {
            brands: brands,
        }
    };

    // const { params } = context
    // const response

}

const Brands = ({ brands }) => {

    console.log(brands)

    return (
        <>
            <Navbar />
            <h1>All Brands</h1>
            <div className='brands'>
                {
                    brands.map(brand => {
                        return (
                            <Link
                                key={brand._id}
                                href={`brands/${brand.slug}`}
                                className='brand'>
                                {brand.name}
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Brands