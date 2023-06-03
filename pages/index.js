import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[1000px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        "Explore intricate and mesmerizing mehendi designs at our portal, where artistry meets tradition!"
                    </div>
                    <div className="text-md md:text-xl">
                        Embark on a journey of artistic expression with our mehendi design portal, where creativity flourishes and beauty unfolds through intricate patterns and delicate handiwork. Explore a myriad of mesmerizing designs, perfect for adding a touch of elegance and charm to any occasion.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/designs?populate=*");

    return {
        props: { products },
        revalidate: 1,
    };
}
