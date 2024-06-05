import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const category = useParams().categoryid;

    useEffect(()=> {
        //se crea la referencia al documento
        const prodRef = collection(db, 'productos')

        const q = category ? query(prodRef, where('category', '==', category)) : prodRef;

        getDocs(q)
            .then((res) => { setProductos(
                res.docs.map((doc) => { return { ...doc.data(), id: doc.id} })
            )
             })
    }, [category])

    

  return (
    <div>
        <ItemList prod={productos} />
    </div>
  )
}

export default ItemListContainer
