import dns from "dns";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const startServer = async () => {
  const express = (await import("express")).default;
  const cors = (await import("cors")).default;

  const connectDB = (await import("./config/mongodb.js")).default;
  const connectCloudinary = (await import("./config/cloudinary.js")).default;

  const userRouter = (await import("./routes/userRoute.js")).default;
  const productRouter = (await import("./routes/productRoute.js")).default;
  const cartRouter = (await import("./routes/cartRoute.js")).default;
  const orderRouter = (await import("./routes/orderRoute.js")).default;
  const instagramRouter = (await import("./routes/instagramRoute.js")).default;

  const createAdmin = (await import("./config/createAdmin.js")).default;

  const app = express();
  const port = process.env.PORT || 4000;

  connectDB();
  connectCloudinary();
  createAdmin();

  app.use(express.json());
  app.use(cors());

  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/order", orderRouter);
  app.use("/api/instagram", instagramRouter);

  app.get("/", (req, res) => {
    res.send("API WORKING");
  });

  app.listen(port, () => {
    console.log("Server started on PORT " + port);
  });
};

startServer();
