import React , {useEffect, useState} from 'react'
import test_image from '../Navbar/logo.png'
import './GallerieGrid.css'




const GallerieGrid = ({id}) => {

    const [items_per_column , set_items_per_column] = useState(3)
    const [gallerieposts , setgallerieposts] = useState([])

    const fetch_gallerieposts = () => {
        fetch(`http://localhost:5000/api/lieux/get/active/lieux/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setgallerieposts(data.data)})
        .catch(err => console.error(err))
    }

    useEffect(fetch_gallerieposts)

    let column_items_array = []

    const splice_gallerieposts = (gallerieitems , column_length) =>{
        const items_copy = [...gallerieitems]
        while (items_copy.length > 0) {
            let chunk = items_copy.splice(0, column_length);
            column_items_array.push(chunk);
          }
    }

    const create_gallerie_item = (item , size) =>{
        let dimension;
        if(size ===0){
            dimension = 'small'
        }
        else if (size ===1){
            dimension = 'big'
        }
        return (
            <div className={`grid-item grid-item-${dimension}`}>
                    <img  src={item.image} alt="" />
            </div>
        )
    }

    const create_gallerie_column = (column_items , size) => {
        
        if(size === 0)
        {
            return (
            <div className='d-flex grid-column-small'>
                {column_items.map((el) =>create_gallerie_item(el , size))}
            </div>
            )
        }
        else if (size === 1){
            return(
            <div className='d-flex grid-column-big'>
                {column_items.map((el) =>create_gallerie_item(el , size))}
            </div>
            )
        }
    }

    const generate_gallerie = () =>{
        splice_gallerieposts(gallerieposts, items_per_column)
        column_items_array.map((items , index) =>create_gallerie_column(items,index%2))
        }

    return (
        <div className='d-flex grid-container'>
            {generate_gallerie()}    
        </div>
    )
}


export default GallerieGrid;