import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Euclid Circular A';
   }

   li {
    list-style: none;
   }

   a {
    text-decoration: none;
   }

   /* Variables */
  :root {
    /* Gray */
  --gray-100: #333333;
  --gray-75: #4f4f4f;
  --gray-50: #828282;
  --gray-25: #f2f2f2;

  /* Primary */
  --primary-100: #2dd06e;
  --primary-50: rgba(0, 214, 143, 0.16);

  /* Element Colors  */
  --red: #db2c66;
  --blue: #2d9cdb;
  --white: #ffffff
  }
`;
