import React , {useState} from 'react'
import './GallerieGrid.css'




const GallerieGrid = ({posts}) => {


    const [items_per_column , set_items_per_column] = useState(2)


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
                    <img  src={item} alt="" />
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

    const generate_gallerie = (posts) =>{
        splice_gallerieposts(posts, items_per_column)
        return column_items_array.map((items , index) =>create_gallerie_column(items,index%2))
        }

    return (
        <div className='d-flex grid-container'>
            {generate_gallerie(posts)}    
         
        </div>
    )
}


export default GallerieGrid;