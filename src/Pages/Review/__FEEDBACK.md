# Code review by David Roberts


## Functional / Behavioral concerns

* Highlighting of ticket selection on the left hand side is slightly confusing, but up for grabs, It does denote that you have selected a ticket
* No persistence to localStorage or server side session, database or current basket

## Code issues,


## Possible improvement / cause for comment

#### ./actions/index.js

```
    type: 'ADD_TO_BASKET'
```
* This could be broken out into a constants file which means these string values will be consistent (IDE discovery) across the use in reducers and actionCreators

```
    id: action.id,
    title: action.title,
    price: action.price
```
* Consider putting this on a payload object key to follow convention or action creators in redux

#### ./components/Basket.js
```
    import './Basket.scss';
```
* importing basket.scss here, but not scoping styles to this component, this classname is used outside of this component, appropriate concerns and dependencies

```
    const mapStateToProps = (state) => Object({
        basket: state.basket,
    });
```
* No need to use a pseudo object constructor here. easier to return:
```
    ({basket}) => ({basket})
```
 
```
    const basket = omit(props, ['basket'])
```
* Why are you omitting the one object key value that you need to use from the incoming props argument? consider simply descructuring this argument in the function arguments declaration
```
    { props.basket.map((item, index) => 
```
* If this was descructured during the function arguments declaration no need to reference the props argument for '.basket' data
```
    <BasketCard
        item={item}
        key={`basket-item-${index}`}
    />
```
* Anti-pattern: do not use possible key values on jsx elements when iterating over an array, this can cause issues when re-rendering part of the DOM tree, use a unique identifier for that row which is unique for the data concerned with that element

#### ./components/BasketCard.js
```
     getCardCost (price, quantity) {
        let cost = price;
        cost = price * quantity;
        return cost;
    }
```
* Over complication, plus potential issue with floating point calculations in JavaScript, use whole numbers - integers to do these calculation and the code can really simplified:
* NOTE: price and quantity values should be stored as integers in the state tree, and numerically formatted into money values in the JSX using a helper / formatter.
```
    return price * quantity
```

```
    <div onClick={this.handleClick.bind(this, { id })}>
```
* No need to bind this function. It is declared as a arrow function so keep the scope of the current instance when called, preferable:
```
    <div onClick={() => this.handleClick(id)}>
```

```
    handleClick = (id) =>
        this.props.dispatch(removeFromBasket(id));
```
* A single handler here using this.props.dispatch is fine, multiple functions using different actionCreators would benefits from using mapDisptachToProps function


#### ./components/Query.js

```
    const campaign_id = '001';
```
* A constant here inside the query object, unless in a real world application but yes for this example it is fine to declare intent of variability, co-located in a simple graphql query file

#### ./components/TicketList.js
```
    <div key={`listing-${index}`}>
```
* Again here don't use index as a safe way to identify a jsx element. See here:
[https://menubar.io/react-keys-index](https://menubar.io/react-keys-index)

#### ./component/Total.js
```
    const calculateTotal = (basket) =>
    basket.length && basket.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);
```
* Potential floating point calculation, use whole numbers, format in render function

#### ./index.js
```
    const WrpCmp = compose(Query)(Review);
```
* Very funny, but should be a descriptive variable name :)
* Possible break this out into a container component, but for a small example this is fine, no extra business logic need in the proposed container component

#### ./reducers/basket.js
* Consider using action.payload destructuring at the top of the reducer
```
    return state.map((item, index) => {
```

* unused 'index' argument declared, remove this
```
    case 'ADD_TO_BASKET':
      if (state.find(item => item.id === action.id)) {
        return state.map((item, index) => {
```
* Consider destructuring action key value from 'action' argument
```
case 'REMOVE_FROM_BASKET':
      return state.map((item, index) => 
```
* Remove unused 'index' variable
```
    case 'REMOVE_FROM_BASKET':
      return state.map((item, index) => {
```
* Remove 'index' unused variable as argument
```
return state.map((item, index) => {
        if (item.id === action.id && item.quantity >= 1) {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity - 1,
          };
        }
        return item;
```
* Destructuring 'item' keys / values simple key+ value for object return
```
    const reviewApp = combineReducers({
      basket,
    });
```
* No need to pass a root state key here :)
#### ./Review.js
```
    const Review = ({ Campaign = {} }) => {
    const { Products, title } = Campaign;
```
* Use appropriate destructuring,
```
    <TicketList
        key="listings"
        title={title}
        products={Products || []}
    />
```
* Product value pass as prop, default should be defined, in propType, defaultProps

#### ./Review.scss
```
    .flex-layout {
        display: flex;
        flex-direction: row;
    }
```
* A global style? Or should this be scope to the component

#### ./Review.spec.js
* Consider a more behavioural approach to testing the full component tree, asserting DOM has changed when user event are fired such as onClick, onChange, onFocus, etc, use mount(), simulate('onChange')





    