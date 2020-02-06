import React, { useEffect } from 'react';
import { Header, Card, Button, Grid, Menu } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import productsActions from '../redux/actions/productsActions';
import cartActions from '../redux/actions/cartActions'
import authActions from '../redux/actions/authActions'

const ProductsContainer = (props) => {
    const dispatch = useDispatch()
    const currentUserId = useSelector(state => state.currentUser.id)
    const products = useSelector(state => state.productsReducer.products)
    const cart = useSelector(state => state.cart.currentCart)
    const userCart = useSelector(state => state.currentUser.current_cart)
   
    useEffect(() => {
        dispatch(productsActions.getProducts());
    })
   
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(cartActions.newCart(currentUserId))
        // dispatch(authActions.addCurrentCart(cart.id, currentUserId))
        // dispatch(cartActions.addToCart())
    }
    
    const renderProducts = () => {
        return products.map(product => 
            <Card key={product.id} color='olive' >
                <Card.Content>
                    <Card.Header> {product.name} </Card.Header>
                    <Card.Description><NumberFormat value={product.price} displayType='text' prefix='$' /> </Card.Description>
                    <Button onClick={handleClick} color='olive' size='mini'>Add to Cart</Button>
                </Card.Content>
            </Card> )
    }


    return (
      <Grid columns='equal' >
        <Grid.Column width={3}>
            <Menu vertical width={2}>
                <Menu.Menu>
                    <Header>Category</Header>
                    <Menu.Item>Herbs</Menu.Item>
                    <Menu.Item>Wellness</Menu.Item>
                    <Menu.Item>Cleaning/Hygiene</Menu.Item>
                    <Menu.Item>Clothing/Accessories</Menu.Item>
                </Menu.Menu>
                <Menu.Menu>
                    <Header>Price</Header>
                    <Menu.Item>Less than $10</Menu.Item>
                    <Menu.Item>On Sale</Menu.Item>
                </Menu.Menu>
            </Menu>
        </Grid.Column>
        <Grid.Column width={13} floated='left' >
            <Header>Products</Header>
            {renderProducts()}     
        </Grid.Column>
      </Grid>
    );
}

export default ProductsContainer;
