const mongoose = require('mongoose');
const Category = require('./models/Category');

const categories = [
  { name: 'Shoes' },
  { name: 'Men T-shirts' },
  { name: 'Makeup' },
  { name: 'Jewellery' },
  { name: 'Women T-shirts' },
  { name: 'Furniture' },
  { name: 'Books' },
  { name: 'Home Appliances' },
  { name: 'Sports Equipment' },
  { name: 'Stationery' },
  { name: 'Groceries' },
  { name: 'Gardening Tools' },
  { name: 'Kitchenware' },
  { name: 'Bags & Luggage' },
  { name: 'Clothing Accessories' },
  { name: 'Watches' },
  { name: 'Sunglasses' },
  { name: 'Health & Beauty' },
  { name: 'Pet Supplies' },
  { name: 'Baby Products' },
  { name: 'Automotive' },
  { name: 'Musical Instruments' },
  { name: 'Art & Craft Supplies' },
  { name: 'Office Supplies' },
  { name: 'Outdoor & Camping' },
  { name: 'Video Games' },
  { name: 'Mobiles & Tablets' },
  { name: 'Computers & Laptops' },
  { name: 'Cameras & Photography' },
  { name: 'Footwear' },
  { name: 'Wines & Spirits' },
  { name: 'Fitness & Gym Equipment' },
  { name: 'Travel Accessories' },
  { name: 'Perfumes & Fragrances' },
  { name: 'Home Decor' },
  { name: 'Luxury Items' }
];

mongoose.connect("mongodb+srv://sachindr:sachin@sachin.cjikv.mongodb.net/categorization_app", { useNewUrlParser: true, useUnifiedTopology: true });

const seedCategories = async () => {
  try {
    await Category.deleteMany(); 
    await Category.insertMany(categories);
    console.log('Categories seeded successfully');
  } catch (error) {
    console.error('Error seeding categories:', error); // Log error here
  } finally {
    mongoose.connection.close(); 
  }
};


seedCategories();
