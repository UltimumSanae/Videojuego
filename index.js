const express = require("express")                  /*/Importamos express js para poder usarlo en el proyecto/*/
const cors = require("cors")
const app = express ()                                     /*/Creamos una app con espress js/*/

app.use(express.static('public'))
app.use(cors())
app.use(express.json())
const players = []
class Player {
    constructor (id)
    {
        this.id = id
    }
    selectMokepon(mokepon)
    {
        this.mokepon = mokepon
    }
    udpateCanvas(x,y)
    {
        this.x = x
        this.y=y
    }
    assignmentAttacks(attacks)
    {
        this.attacks = attacks
    }
}
class Mokepon {
    constructor (name)
    {
        this.name = name
    }
}
app.get                                                             /*/Cuando la url raiz responda hola/*/
    ("/unirse", (req, res ) => 
        {
            const id = `${Math.random()}`           /*/El ${} convierte la info a texto /*/
            const player = new Player(id)
            players.push(player)
            res.setHeader("Access-Control-Allow-Origin" , "*")
            res.send(id)
        }
    )

app.post("/mokepon/:playerId" ,  (req, res) => {
    const playerId = req.params.playerId || ""
    const name = req.body.mokepon || ""
    const mokepon = new Mokepon(name)
    
    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0)
    {
        players[playerIndex].selectMokepon(mokepon)
    }
    console.log(players)
    console.log(playerId)
    res.end()
})

app.post("/mokepon/:playerId/position" , (req , res) =>
{
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0)
    {
        players[playerIndex].udpateCanvas(x , y)
    }
    const enemys = players.filter((player) => playerId !== player.id)

    res.send({enemys})
    
})

app.post("/mokepon/:playerId/attacks" ,  (req, res) => {
    const playerId = req.params.playerId || ""
    const attacks = req.body.attacks || []
    const playerIndex = players.findIndex((player) => playerId === player.id)

    if (playerIndex >= 0)
    {
        players[playerIndex].assignmentAttacks(attacks)
    }
    res.end()
})

app.get("/mokepon/:playerId/attacks" , (req, res) => {
    const playerId = req.params.playerId || ""
    const player = players.find((player) => player.id === playerId)
    res.send({
        attacks: player.attacks || []
    })
})
app.listen(8080, () =>                  /*/Escucha continuamente las peticiones de los clientes para respoder/*/
{
    console.log("Server...")
})