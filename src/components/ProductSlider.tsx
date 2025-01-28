import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ProductSlider = () => {
  
  const products = [
    {
      id: 2,
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/474517207_122105167376740156_8597970707446124744_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=8Jkeya5OBPsQ7kNvgEVO0gc&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=AWf5XcP7sYyJQdb4nEE4ZLV&oh=00_AYBVu9hhGOhrLlJwsm59QWXSoerG5VRPEb56wgYmgGk8-w&oe=679E71D1",
      title: "School Uniforms",
    },    
    {
      id: 1,
      image: "https://www.pashafabrics.pk/cdn/shop/files/WhatsApp_Image_2023-10-15_at_3.10.05_PM_2c4e2475-01f3-4d96-b7a7-75cbe46a557f.jpg?v=1719522065&width=493",
      title: "Premium Textiles",
    },

    {
      id: 3,
      image: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/474505590_122105167262740156_7031286832193510854_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JvWrPlo7hhsQ7kNvgH08Qlb&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=AIX0eSujjxpHsqMQ98tfWeN&oh=00_AYAkIfuVqEZswkxpPdEfYP1R1TvBTkVViCu4fzvURBbSrw&oe=679E6DEB",
      title: "Embroidery Services",
    },
    {
      id: 4,
      image: "https://siranisfashion.com/cdn/shop/articles/Fatim-Sylla-Siranis-Fashion-Owner_800x.jpg?v=1685123203",
      title: "Professional Attire",
    },
    {
      id: 5,
      image: "https://laviye.com/cdn/shop/products/LV-V2-9_d8c983c9-339c-4a8d-82eb-27d54ee44e7b.jpg?v=1645520637&width=1200",
      title: "Event Wear",
    },
    {
      id: 6,
      image: "https://static.wixstatic.com/media/1faf44_7c9f17b66b774c999f324d8c79d07e5b~mv2.jpg/v1/fill/w_540,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dominion%20Industrial%20Suppliers%20Africa%20-%20D.jpg",
      title: "Safety Wear",
    },
    {
      id: 7,
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/475020812_122105167670740156_3472420397212450521_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UIBj801FngQQ7kNvgFKDQgH&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=ASuAozHVvT6lkA3BWBuelLB&oh=00_AYBOLag5biyq2Z1vfe9kPkT45IlV2tDtF_jh4lY7dfBNxQ&oe=679E7386", 
      title: "African Attire",
    },
    {
      id: 8,
      image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/474593208_122105167340740156_6979518174117907377_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=WkJ-4Rg6w1IQ7kNvgH4UqC9&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AnfiiFwT3T3I_rNP9kKFemS&oh=00_AYD-ee5KpiwUlikzNICi205oPQC2s36oX7Jnv4KYP-3idQ&oe=679E73E4",
      title: "Sports Wear", 
    }, 
    {
      id: 9,
      image: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/474531171_122105167184740156_2703725583008997066_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=10Z1pkk5lXIQ7kNvgF3K1LC&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=A87qHa94iHkqVnugvIHzbN_&oh=00_AYCfj9ps1P1TTkUUUm_A8y7mlETv4gtGlhUOG-4vlXPJug&oe=679E4BDF",
      title: "Premium Materials",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-prolook-navy mb-8 text-center">
        Our Products
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-2">
                  <div className="overflow-hidden rounded-lg aspect-square">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-prolook-navy mt-4 text-center">
                    {product.title}
                  </h3>

                </CardContent>
              </Card>

            </CarouselItem>
             
          ))}

        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </motion.div>
    
  );
};

export default ProductSlider;