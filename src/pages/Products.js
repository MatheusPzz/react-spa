import { Link } from 'react-router-dom';
export const Products = () => {
    return (
        <>

        <header className="theme-light text-center-desktop text-center-mobile">

            <div className="container-text">
                <h1>Products page</h1>
            </div>

        </header>

            <section className="w-820px">

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium animi porro excepturi quam est iure enim, veniam repudiandae doloribus nemo eius necessitatibus ex architecto eligendi dignissimos nobis et minima tenetur?</p>

                <p>This is a link to the <Link to ="./">Home</Link> page.</p>
                <p>This is a link to the <Link to="./contact">Contact</Link> page.</p>

            </section>
        </>
    );
}


export default Products;
