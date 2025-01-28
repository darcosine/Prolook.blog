import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const VirtualTour = () => {
  useEffect(() => {
    document.title = "Virtual Tour - Prolook Clothing & Textiles";
  }, []);

  const staff = [
    {
      name: "Production Team",
      description: "Our skilled production team ensures quality in every stitch",
      image: "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/474592133_122105166902740156_5933308982083813395_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=yzDfAAIVgmgQ7kNvgEGW1Y-&_nc_zt=23&_nc_ht=scontent-fra3-2.xx&_nc_gid=AUR-eNAAGC0Q2fbnEqqrkMQ&oh=00_AYAdmzVlv2zIU26VdUp3jP6EWpFAiZVXpFHUqMln-odNiQ&oe=679E6827"
    },
    {
      name: "Design Team",
      description: "Where creativity meets craftsmanship",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/474520344_122105166698740156_2566357054649072581_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=sWwa3nQHghkQ7kNvgGq5jz0&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=AMT3ip1vqjIA8fISiS-p2kB&oh=00_AYDdctSnH9s3Gzi5jvBIzAKEjuecRmLmxUMd6b18hk6TAw&oe=679E44D9"
    },
    {
      name: "Workshop",
      description: "Prolook workshop & production studio",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/474591968_122105167850740156_7971115576811188886_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Jck4gv_78rQQ7kNvgFQi3zD&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=Au01ldPVHS7OU1aSWh3P7gv&oh=00_AYDJodqumBfIHdmNam5J-OGfTQDHB2xzV6yrV8ZYuNIdZg&oe=679E5ADB"
    },
    {
      name: "Finishers",
      description: "Product auditing & quality control",
      image: "https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/474551473_122105166818740156_5907233366158632448_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=woprXQKVIXYQ7kNvgFCiRq3&_nc_zt=23&_nc_ht=scontent-fra3-2.xx&_nc_gid=ARzs-umFmPk6CFfqz40XhGL&oh=00_AYCjrYlL6jk7fH56k_-p81Ef_KDp9lFP8prG4e0gHEu6AQ&oe=679E4812"
    },
    {
      name: "Models",
      description: "Gorgeous models showcasing our products",
      image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/474516546_122105167250740156_7343874122828444760_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rfFXY57Ng-0Q7kNvgHSrpb5&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=AK2WtRtlGszO1-_a0JT3iNZ&oh=00_AYBYooOlhjTXn468-qiFKAI3T5K5XJc5Lt9xddkXxP2WOg&oe=679E5E47"
    },
    {
      name: "Embroidery Section",
      description: "State-of-the-art embroidery machines and skilled operators",
      image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/474390606_122105167070740156_4678039632091155173_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=0AbXyiHvXOsQ7kNvgHqO5LP&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=ASyZFaVOBaDxjoKb9nGS_Am&oh=00_AYCz8YF1Z1Kd1c0J4B5eR0m7oi7yM5McZObufJfFbAbWQg&oe=679E5842"
    }
  ];

  const owner = {
    name: "Josias & Primrose Jengeta",
    title: "Founders",
    description: "With over 20 years of experience in the textile industry, Josias & Primrose have built Prolook into a leading provider of premium clothing and textile solutions.",
    image: "https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/269832677_666989051376827_1455366241281230756_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=scnaytb3q1MQ7kNvgGvTwQ_&_nc_zt=23&_nc_ht=scontent-fra5-1.xx&_nc_gid=ACMb6ypjocSKh3nA5DVJ8NF&oh=00_AYCzGgHyssXWsxPJn-4YVoXWV0q3BaQsPuxNPfeMyjVV2A&oe=679BD8E8"
  };
  const employees = {
    name: "Prolook Family",
    title: "Workforce",
    description: "The Prolook family is a team of dedicated professionals who work together to create high-quality products and services.",
    image: "https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/474591539_122105166752740156_5779194993733772746_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=XslonZSxq8AQ7kNvgFfbPiV&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=AWFSp7JXtJ1tT2fUATkMWa2&oh=00_AYAM8mJiLnSOW93aLo-8IuzHw0sn4Nwl0vZYKZYey568Pg&oe=679E52FD"
  };


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
            <h1 className="text-4xl font-bold text-prolook-navy">Virtual Tour</h1>
          </div>

          {/* Owner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 max-w-4xl mx-auto"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '10px'}}
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-prolook-navy mb-2">{owner.name}</h2>
                <h3 className="text-lg text-prolook-blue mb-4">{owner.title}</h3>
                <p className="text-gray-600">{owner.description}</p>
              </div>
            </div>
          </motion.div>
          {/* Employee Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 max-w-4xl mx-auto"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={employees.image}
                  alt={employees.name}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-prolook-navy mb-2">{employees.name}</h2>
                <h3 className="text-lg text-prolook-blue mb-4">{employees.title}</h3>
                <p className="text-gray-600">{employees.description}</p>
              </div>
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-prolook-navy mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VirtualTour;