import express from express

const app = express()

app.get('/', (req,res)=> {
    res.send('server listen on second one')
})

app.listen(80, ()=> {
    console.log('ok second one')
})