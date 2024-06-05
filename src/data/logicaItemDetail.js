import data from './MOCK_DATA.json';

export const getProducts = (id) => {
    return new Promise ((resolve, reject) => {

        const item = data.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {reject ({
            error:'no se encontro el objeto'
        })}
    })
}