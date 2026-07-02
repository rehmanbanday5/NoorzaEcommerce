import {v2 as cloudinary} from 'cloudinary';




// Function for add product 

const addProduct = async (req, res) => {
    try{

        const {name, description, price, category, subCategory, sizes, bestSellers} = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) =>{
                    console.log("IMAGE PATH:", item.path);
             try {
    console.log("Uploading:", item.path);

    const result = await cloudinary.uploader.upload(item.path, {
        resource_type: "image"
    });

    console.log("UPLOAD SUCCESS:", result.secure_url);

    return result.secure_url;

} catch (err) {

    console.log("FULL ERROR:");
    console.log(err);

    throw err;
}
                return result.secure_url
            })
        )

        console.log(name, description, price, category, subCategory, sizes, bestSellers)
        console.log(imagesUrl)
        

        res.json({})

    } catch (error){
        console.log(error)
        res.json({success:false, message: error.message})

    }

}



// Function for List product 
    
const listProducts = async (req, res) => {

}


// Function for removing product 

const removeProduct = async (req, res) => {

}


// Function for single product 

const singleProduct = async (req, res) => {

}


export { addProduct, listProducts, removeProduct, singleProduct }