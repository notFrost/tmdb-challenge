// For importing SVG files
declare module "*.svg" {
  const content: any;
  export default content;
}

// For importing PNG, JPG, JPEG, GIF files
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

// For CSS modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS modules
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// For other static files like PDFs, etc.
declare module "*.pdf";
