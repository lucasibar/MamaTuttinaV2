import axios from 'axios'
export const GET_DAY= "GET_DAY" 
export const GET_DIARY= "GET_DIARY"
export const POST_NEW_ITEM= "POST_NEW_ITEM" 
export const PUT_DAYBEFORE= "PUT_DAYBEFORE" 


//DAY CRUD
export const getDay = () => dispatch => {
  return dispatch({type: GET_DAY, payload: {
    number: 2,
    ingredients_products: [
        {
            name: "tomate",
            cuantity: 2,
            unit: "unidades"
        },
        {
            name: "tomate",
            cuantity: 0.5,
            unit: "kgs"
        }
    ] 
  } })
}

export const dayBefore1 =(dayNumber)=>dispatch => {
    return dispatch({type: PUT_DAYBEFORE, payload: dayNumber })

}
//SHOPLIST CRUD
export const getDiary = () => dispatch => {
 return dispatch({type: GET_DIARY, payload: 
    [
      {
          number: 1,
          ingredients_products:[
            {
                name: "porcion de pizza",
                cuantity: 2,
                unit: "unidades"
            },
            {
                name: "fideos",
                cuantity: 1,
                unit: "porcion"
            } 
          ] 
      },
      {
          number: 2,
          ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades"
            },
            {
                name: "tomate",
                cuantity: 0.5,
                unit: "kgs"
            }
          ] 
      }
      ,{
          number: 3,
          ingredients_products:[
              {
                  name: "porcion de pizza",
                  cuantity: 2,
                  unit: "unidades"
              },
              {
                  name: "fideos",
                  cuantity: 1,
                  unit: "porcion"
              }
          ] 
      },      {
        number: 4,
        ingredients_products:[
            {
                name: "tomate",
                cuantity: 2,
                unit: "unidades"
            },
            {
                name: "tomate",
                cuantity: 1,
                unit: "kgs"
            }
        ] 
    },
    ]
   })
}

export const addNewItem = (newItem) => dispatch => {
    return dispatch({type: POST_NEW_ITEM, payload: newItem})
}
 