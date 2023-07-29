const app = require('./src/app');
const connectDatabase = require('./src/config/database');
const cloudinary = require('cloudinary');
const PORT = process.env.PORT || 4000;

// UncaughtException Error
// process.on('uncaughtException', (err) => {
//     console.log(`Error: ${err.message}`);
//     process.exit(1);
// });

connectDatabase();

try {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })
    console.log("IMage Server");
    
} catch (error) {
    console.log("Error",error);
    
}

const server = app.listen(PORT, () => {
    console.log(`Server running`)
});

// Unhandled Promise Rejection
// process.on('unhandledRejection', (err) => {
//     console.log(`Error: ${err.message}`);
//     server.close(() => {
//         process.exit(1);
//     });
// });
