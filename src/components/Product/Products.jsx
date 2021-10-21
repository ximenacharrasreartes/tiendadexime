 import React from "react";
 import { Grid } from "@material-ui/core";

 const Products = [
     {  id: 1, name: 'ISPIRAZIONE RISTRETTO ITALIANO', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10', price: '$5'},
     {  id: 2, name: 'ISPIRAZIONE RISTRETTO ITALIANO', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10', price: '20'},
     {  id: 3, name: 'ISPIRAZIONE RISTRETTO ITALIANO', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10'},
     {  id: 4, name: 'ISPIRAZIONE RISTRETTO ITALIANO', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10'},

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {Products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                <Product product={product}/>
                </Grid>
            ))}

        </Grid>
    </main>
}

 export default Products; 