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
`;
