import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const locations = [
  {
    name: 'Patan Durbar Square',
    img: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Patan Durbar Square'
  },

  {
    name: 'LakeSide, Pokhara',
    img: 'https://www.holidify.com/images/cmsuploads/compressed/pokhara-1699787_1280_20180629193006.jpg'
  },

  {
    name: 'Mandala Street',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYE0AbzpBNAhlBKeRMFRKwDp-UzGYIedLiw&s'
  },

  {
    name: 'Namche Bajar',
    img: 'https://marvelsofnepal.com/wp-content/uploads/2020/09/namche-bazaar.jpg'
  },

  {
    name: 'Boudhanath Stupa',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXeKb8ribbUXman2WsmyN-sxct1pdXjz3yGQ&s'
  },

  {
    name: 'Pashupatinath Marga ',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/13/4a/95/ac/pashupatinath-is-the.jpg'
  },

  {
    name: 'Thamel',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sbbuNR8Rf10DAHfnh26DtRa-5QZ1u3Ozkg&s'
  },

  {
    name: 'Basantapur',
    img: 'https://c8.alamy.com/comp/DXGB9G/people-strolling-across-basantapur-durbar-square-hanuman-dhoka-old-DXGB9G.jpg'
  }


  // Add more locations here as needed
];

const Find = () => {
  return (
    <div id="findUs" className="flex flex-col items-center mx-4 min-h-[600px]">
      <h1 className="text-5xl md:text-3xl font-bold my-4">Find Us</h1>
      <p className="text-gray-700 text-2xl md:text-xl text-center">
        CoffeeHub outlets are available with the best <br /> coffee throughout the major cities of Nepal.
      </p>

      <div className="my-10 p-8">
        <div className="grid grid-cols-4 md:grid-cols-1 gap-12">
          {locations.map((location, index) => (
            <Card key={index} className="w-64 h-56">
              <CardHeader color="blue-gray" className="relative h-36">
                <img
                  src={location.img}
                  alt={location.alt}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                  {location.name}
                </Typography>
              </CardBody>
            </Card>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Find;
