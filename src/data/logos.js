// Automatically import all logos from the logos directory
const logos = {};
const logoContext = require.context("@/assets/images/logos", false, /\.(png|jpe?g|svg|webp|gif|avif)$/);

logoContext.keys().forEach((key) => {
  const name = key.replace(/^\.\/|\.(png|jpe?g|svg|webp|gif|avif)$/g, ""); // Extract filename without extension
  logos[name] = logoContext(key); // Assign logo path
});

// Export logos so they can be used in data.js
export default logos;
