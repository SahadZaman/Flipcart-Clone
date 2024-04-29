import { products } from "./Constants/Data.js"
import Product from "./Model/Product-schema.js";


const DefaultData = async()=>{
    try{
       await Product.deleteMany({});
       await Product.insertMany(products);
        console.log("Default Data imported sucessfully");
    } catch (error) {
        console.log('Error while inserting default data', error.message);
    }

}
export default DefaultData;