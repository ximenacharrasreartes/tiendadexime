 import React from "react";
 import { Grid } from '@material-ui/core';

 import Product from './Product';

 const products = [
     {  id: 1, name: 'ISPIRAZIONE RISTRETTO ITALIANO', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10', price: '$120', image: 'https://www.buynespresso.com/media/catalog/product/cache/9e42ebde6984d4cea9d60c5584660eef/0/2/02_4.png'},
     {  id: 2, name: 'ISPIRAZIONE FIRENZE ARPEGGIO', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10', price: '$200', image: 'https://www.buynespresso.com/media/catalog/product/cache/9e42ebde6984d4cea9d60c5584660eef/0/6/06.png'},
     {  id: 2, name: 'ISPIRAZIONE ROMA', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10', price: '230', image: 'https://www.buynespresso.com/media/catalog/product/cache/9e42ebde6984d4cea9d60c5584660eef/0/2/02_4.png'},
     {  id: 2, name: 'ISPIRAZIONE NAPOLI', description:'CAFÉ PODEROSO Y CONTRASTANTE. INTENSIDAD  10', price: '203', image: 'https://www.buynespresso.com/media/catalog/product/cache/9e42ebde6984d4cea9d60c5584660eef/0/6/06.png'},
 ];

const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                <Product product={product}/>
                </Grid>
            ))}

        </Grid>
    </main>
    )
}

 export default Products; 