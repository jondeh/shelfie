module.exports = {
    getList: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err))
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_product(+id).then(product => res.status(200).send(product)).catch(err => res.status(500).send(err))
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, image} = req.body

        db.create_product(name, price, image).then(newProduct => res.status(200).send(newProduct)).catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_products(+id).then(() =>
            res.sendStatus(200)).catch(err => res.status(500).send(err))
    },
    editProduct: (req, res) => {
        console.log('ding')
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, image} = req.body

        db.edit_products(+id, name, price, image).then(() => 
        res.sendStatus(200)).catch(err => res.status(500).send(err))

    }
}