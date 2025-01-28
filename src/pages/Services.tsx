import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Prolook Clothing & Textiles";
  }, []);

  const services = [
    {
      title: "School Uniforms",
      description: "Quality school uniforms for diligent pupils",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/474517207_122105167376740156_8597970707446124744_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_ohc=8Jkeya5OBPsQ7kNvgEVO0gc&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=AWf5XcP7sYyJQdb4nEE4ZLV&oh=00_AYBVu9hhGOhrLlJwsm59QWXSoerG5VRPEb56wgYmgGk8-w&oe=679E71D1"
    },
    
    {
      title: "Embroidery Services",
      description: "High-quality embroidery for logos and designs",
      image: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/474505590_122105167262740156_7031286832193510854_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JvWrPlo7hhsQ7kNvgH08Qlb&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=AIX0eSujjxpHsqMQ98tfWeN&oh=00_AYAkIfuVqEZswkxpPdEfYP1R1TvBTkVViCu4fzvURBbSrw&oe=679E6DEB"
    },
    {
      title: "Corporate Apparel",
      description: "Professional attire for your business needs",
      image: "https://siranisfashion.com/cdn/shop/articles/Fatim-Sylla-Siranis-Fashion-Owner_800x.jpg?v=1685123203"
    },
    {
      title: "Sports Wear",
      description: "Performance wear for school atheletes",
      image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/474593208_122105167340740156_6979518174117907377_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=WkJ-4Rg6w1IQ7kNvgH4UqC9&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AnfiiFwT3T3I_rNP9kKFemS&oh=00_AYD-ee5KpiwUlikzNICi205oPQC2s36oX7Jnv4KYP-3idQ&oe=679E73E4"
    },
    {
      title: "African Attire",
      description: "Culture based attire for your events",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/475020812_122105167670740156_3472420397212450521_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=UIBj801FngQQ7kNvgFKDQgH&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=ASuAozHVvT6lkA3BWBuelLB&oh=00_AYBOLag5biyq2Z1vfe9kPkT45IlV2tDtF_jh4lY7dfBNxQ&oe=679E7386"
    },
    {
      title: "Premium Textiles",
      description: "High-quality fabrics for various applications",
      image: "https://www.pashafabrics.pk/cdn/shop/files/WhatsApp_Image_2023-10-15_at_3.10.05_PM_2c4e2475-01f3-4d96-b7a7-75cbe46a557f.jpg?v=1719522065&width=493"
    },
    {
      title: "Quality Materials",
      description: "Premium materials for your garment manufacturing",
      image: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/474531171_122105167184740156_2703725583008997066_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=10Z1pkk5lXIQ7kNvgF3K1LC&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=A87qHa94iHkqVnugvIHzbN_&oh=00_AYCfj9ps1P1TTkUUUm_A8y7mlETv4gtGlhUOG-4vlXPJug&oe=679E4BDF"
    },
    {
      title: "Garment Repair",
      description: "Quality garment repair services",
      image: "https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/474591550_122105166974740156_6091135503228902091_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f727a1&_nc_ohc=8gaK3zSJBj8Q7kNvgGSur6I&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=AF5VnHkf2wrPpyHYO2NIaPO&oh=00_AYCkxK8FGJ8TZgcbK4CBqjdqEvM31hpRDFDAjIm0j5bOEg&oe=679E5947"
    },
    {
      title: "Custom Event Wear",
      description: "Custom event wear for your events",
      image: "https://laviye.com/cdn/shop/products/LV-V2-9_d8c983c9-339c-4a8d-82eb-27d54ee44e7b.jpg?v=1645520637&width=1200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-prolook-navy to-prolook-blue/90">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 pt-24 pb-12"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/lovable-uploads/6abf9000-5f4b-47d6-aabe-c3c0fd488c7d.png"
              alt="Prolook Logo"
              className="h-16 w-auto"
            />
            <h1 className="text-4xl font-bold text-prolook-navy">Our Services</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-prolook-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
    </div>
    
  );
};

export default Services;