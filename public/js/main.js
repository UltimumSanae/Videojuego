/*/Select Elements/*/
const sectionAttack = document.getElementById('select-attacks')
const sectionPets = document.getElementById('select-pets')
/*/Buttons/*/
const buttonPetPlayer = document.getElementById('button-pet')
const buttonrestart = document.getElementById('button-restart')
const buttonsAttackPet = document.getElementById('buttons-attack-pet')
/*/Pet player and enemy/*/
const spanNamePlayer = document.getElementById('pet-player')
const spanLifePlayer = document.getElementById('live-pet-player')
const attackPlayerM = document.getElementById('attack-player')
const petSelectEnemy = document.getElementById('pet-enemy')
const spanLifeEnemy = document.getElementById('live-pet-enemy')
const attackEnemyM = document.getElementById('attack-enemy')
/*/Container/*/
const containerCard = document.getElementById('container-card')
const containerButton =  document.getElementById('container-button')
/*/Result and restart/*/
const notification = document.getElementById('result')
const sectionRestart = document.getElementById('restart')
/*/Section del mapa/*/
const sectionSeeMap = document.getElementById('see-map')
const Map = document.getElementById('map')
/*/Inicializacion de las variables/*/
/*/Arrays/*/
let mokepones = []
let attackPlayer = []
let attackEnemy = []
let buttons = []
let mokeponesEnemies = []
/*/Mokepon /*/
let optionsMokepons
let buttonMokepons
/*/Pets/*/
let inputHipodoge      
let inputCapipepo      
let inputRatigueya  
let inputTucapalma
let inputPydos
let inputLangostelvis
let petPlayer
let attacksPetsType
/*/Buttons/*/  
let buttonFire
let buttonWater
let buttonLand
/*/Attack and live/*/
let varAttackPlayer
let varAttackEnemy
let lifePlayer 
let lifeEnemy 
/*/Name attacks/*/
let fireLogic = 'Fire 🔥'
let waterLogic = 'Water 💧'
let landLogic = 'Land 🌱'
/*/Canvas/*/
let canvas = map.getContext('2d')
let interval
let mapBackground = new Image()
let sizeCanvas = 40
let heightMapIdeal
let widthMap = sectionSeeMap.getBoundingClientRect().width 
let petEnemy
/*/JSON/*/
let playerId = null
let enemyId = null

heightMapIdeal = widthMap * 3 / 4
map.width = widthMap
map.height = heightMapIdeal
/*/Creacion de componentes/*/
class Mokepon 
{
    constructor (name, img, life, id, actions, imgMap, idP = null)
    {
        this.idP = idP
        this.name = name
            this.img = img
            this.life = life
            this.id = id
            this.actions =  actions
            this.attacks = []
            this.width = sizeCanvas
            this.height = sizeCanvas
            this.x = random( 0 , map.width - this.width )
            this.y = random( 0 , map.height - this.height)
            this.mapImg = new Image ()
            this.mapImg.src = imgMap
            this.speedX = 0
            this.speedY = 0
        }

        paintMokepon()
        {
            canvas.drawImage(
                this.mapImg,
                this.x,
                this.y,
                this.width,
                this.height
            )
        }
}

/*/Datos indiviales por mokepon/*/
let petCapipepo = new Mokepon('Capipepo' , './img/Capipepo-787.png' , 5 , 'capipepo_select' , 'capipepo_img' ,'./img/Capipepo.png' ,)
let petHipodoge = new Mokepon('Hipodoge' , ' ./img/Hipodoge-787.png', 4 , 'hipodoge_select' , 'hipodoge_img' , './img/Hipodoge.png')
let petRatigueya = new Mokepon('Ratigueya' , './img/Ratigueya-787.png' , 4 , 'ratigueya_select' , 'ratigueya_img' , './img/Ratigueya.png')
let petTucapalma = new Mokepon('Tucapalma' , './img/Tupacalma-787.png', 5 , 'tupacalma_select' , 'tupacalma_img' , './img/Tucapalma.png')
let petPydos = new Mokepon('Pydos' , './img/Pydos-787.png' , 5 , 'pydos_select' , 'pydos_img' , './img/Pydos.png')
let petLangostelvis = new Mokepon('Langostelvis' , './img/Langostelvis-787.png' , 5 , 'langostelvis_select' , 'langostelvis_img' , './img/Langostelvis.png')

/*/Ataques globales/*/
const attacksGlobal = [
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
]
/*/Ataques individuales/*/
const capipepoAttacksArray = [
    {     nombre: landLogic , id: 'button-land'        },
    {     nombre: landLogic , id: 'button-land'        }
]
const hipodogeAttacksArray = [
    {     nombre: waterLogic , id: 'button-water'        },
    {     nombre: waterLogic , id: 'button-water'        }
]
const ratigueyaAttacksArray = [
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: fireLogic , id: 'button-fire'        }
]
const tucapalmaAttacksArray = [
    {     nombre: landLogic , id: 'button-land'        },
    {     nombre: fireLogic , id: 'button-fire'        }
]
const pydosAttacksArray = [
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'        },
]
const langostelvisAttacksArray = [
    {     nombre: landLogic , id: 'button-land'      },
    {     nombre: fireLogic , id: 'button-fire'        },
]

petCapipepo.attacks.push(...attacksGlobal , ...capipepoAttacksArray)
petHipodoge.attacks.push(...attacksGlobal , ...hipodogeAttacksArray)
petRatigueya.attacks.push(...attacksGlobal , ...ratigueyaAttacksArray)
petTucapalma.attacks.push(...attacksGlobal , ...tucapalmaAttacksArray)
petPydos.attacks.push(...attacksGlobal , ...pydosAttacksArray)
petLangostelvis.attacks.push(...attacksGlobal , ...langostelvisAttacksArray)

/*/Se guardan las variables/*/
mokepones.push (petCapipepo, petHipodoge, petRatigueya, petTucapalma , petPydos, petLangostelvis )

/*/Inicia el programa/*/
function startPlay()
{
    /*/Oculta elementos/*/
    sectionAttack.style.display = 'none'
    sectionRestart.style.display = 'none'
    /*/Creacion de ciclo/*/
    mokepones.forEach((mokepon) =>
    {
            /*/iteracion del codigo Alt + 96 ${} cambia/*/
            optionsMokepons = 
            `
                <img src = ${mokepon.img} id =${mokepon.actions} alt=${mokepon.name}>
                `
            /*/Se guartda en el html += iteracion /*/
                containerCard.innerHTML += optionsMokepons
            /*/Variables lentas /*/
            CapipepoInteraction = document.getElementById(mokepones[0].actions)
            HipodogeInteraction = document.getElementById(mokepones[1].actions)
            RatiguetaInteraction = document.getElementById(mokepones[2].actions)
            TucapalmaInteraction = document.getElementById(mokepones[3].actions)
            PydosInteraction = document.getElementById(mokepones[4].actions)
            LangostelvisInteraction = document.getElementById(mokepones[5].actions)
    }
    )
    /*/Ciclo/*/
    mokepones.forEach((mokepon)=>
    {
            /*/Elemento insertado/*/
            buttonMokepons = `
            <div class="pets" id=${mokepon.id}>
                <input type="radio" name ="pets" id =${mokepon.name} />
                <label for=${mokepon.name}>${mokepon.name}</label>    
            </div>
            `
            /*/La info pasa al html/*/
            containerButton.innerHTML += buttonMokepons
            /*/Variable que llamamos/*/
            
            inputCapipepo       = document.getElementById(mokepones[0].name)
            inputHipodoge       = document.getElementById(mokepones[1].name)
            inputRatigueya      = document.getElementById(mokepones[2].name)
            inputTucapalma    = document.getElementById(mokepones[3].name)
            inputPydos            = document.getElementById(mokepones[4].name)
            inputLangostelvis = document.getElementById(mokepones[5].name)
    
            capipepo = document.getElementById(mokepones[0].id)
            hipodoge = document.getElementById(mokepones[1].id)
            ratigueya = document.getElementById(mokepones[2].id)
            tucapalma = document.getElementById(mokepones[3].id)
            pydos = document.getElementById(mokepones[4].id)
            langostelvis = document.getElementById(mokepones[5].id)

    })
    
    /*/Efecto/*/
    capipepo.addEventListener("mouseover", () => {   CapipepoInteraction.className = mokepones[0].actions    },   false   )
    hipodoge.addEventListener("mouseover", () => {   HipodogeInteraction.className = mokepones[1].actions   },   false   )
    ratigueya.addEventListener("mouseover", () => {   RatiguetaInteraction.className = mokepones[2].actions    },   false   )
    tucapalma.addEventListener("mouseover", () =>{ TucapalmaInteraction.className = mokepones[3].actions   },   false   )
    pydos.addEventListener("mouseover", () =>{ PydosInteraction.className = mokepones[4].actions                  },   false   )
    langostelvis.addEventListener("mouseover", () =>{ LangostelvisInteraction.className = mokepones[5].actions} , false)

    capipepo.addEventListener("mouseout", () =>   {   CapipepoInteraction.className = "";                  },   false   )
    hipodoge.addEventListener("mouseout", () =>   {   HipodogeInteraction.className = "";                  },   false   )
    ratigueya.addEventListener("mouseout", () =>   {   RatiguetaInteraction.className = "";                  },   false   )
    tucapalma.addEventListener("mouseout", () =>   {   TucapalmaInteraction.className = "";                  },   false   )
    pydos.addEventListener("mouseout", () =>   {   PydosInteraction.className = "";                  },   false   )
    langostelvis.addEventListener("mouseout", () =>   {   LangostelvisInteraction.className = "";                  },   false   )
    
    CapipepoInteraction = document.getElementById(mokepones[0].actions)
    HipodogeInteraction = document.getElementById(mokepones[1].actions)
    RatiguetaInteraction = document.getElementById(mokepones[2].actions)
    TucapalmaInteraction = document.getElementById(mokepones[3].actions)
    PydosInteraction = document.getElementById(mokepones[4].actions)
    LangostelvisInteraction = document.getElementById(mokepones[5].actions)
}

/*/Elementos /*/
buttonPetPlayer.addEventListener('click' , selectPetPlayer)
buttonrestart.addEventListener('click' , restartPlay)
joinTheGame()
/*/AK-45/*/
function joinTheGame()
{
    fetch('http://192.168.1.10:8080/unirse')
        .then(function (res){
            if(res.ok)
            {
                res.text()
                    .then(function (answer)
                    {
                        console.log(answer)
                        playerId = answer
                    })
            }
        })
}

/*/Animacion que al seleccionar un animal este se muestre como img/*/
function selectPetPlayer () 
{

    /*/Se verifica el animal seleccionado con el id /*/
    if (inputCapipepo.checked)
    {
            petSelectPlayer = inputCapipepo.id
            petPlayer=  petCapipepo 
            lifePlayer = mokepones[0].life
    } else if (inputHipodoge.checked)
    {
            petSelectPlayer = inputHipodoge.id
            petPlayer=  petHipodoge 
            lifePlayer = mokepones[1].life
    } else if (inputRatigueya.checked)
    {
            petSelectPlayer = inputRatigueya.id
            petPlayer = petRatigueya
            lifePlayer = mokepones[2].life
    }else if (inputTucapalma.checked)
    {
            petSelectPlayer = inputTucapalma.id
            petPlayer = petTucapalma
            lifePlayer = mokepones[3].life
    }else if (inputPydos.checked)
    {
            petSelectPlayer = inputPydos.id
            petPlayer = petPydos
            lifePlayer = mokepones[4].life
    }else if (inputLangostelvis.checked)
    {
            petSelectPlayer = inputLangostelvis.id
            petPlayer = petLangostelvis
            lifePlayer = mokepones[5].life
    }else 
    {
        alert("DEBES SELECCIONAR UN ANIMAL")
        return
    }

    sectionAttack.style.display = 'inline-block'
    sectionPets.style.display = 'none'
    spanNamePlayer.innerHTML = petSelectPlayer
    selectMokepon(petSelectPlayer)
    attackPlayers(petSelectPlayer)
    startMap()

}
function selectMokepon(petSelectPlayer)
{
    fetch(`http://192.168.1.10:8080/mokepon/${playerId}` , {
        method: 'post' ,
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            mokepon: petSelectPlayer
        })
    })
}
/*/Si la mascota seleccionada es igual a algun mokepon/*/
function attackPlayers(petSelectPlayer)
{
    /*/Se crea el iterador con cada uno de los mokepones existentes/*/
    for (let i = 0; i  < mokepones.length  ; i++) 
    {
        /*/Se guardan los ataques en una variable/*/
        if (mokepones[i].name == petSelectPlayer)
        {
            attacksPetsType = mokepones[i].attacks
        }
    }
    /*/Se inicializa una funcion/*/
    seeAttacks(attacksPetsType)
}
/*/Con el mokepon en el que guardamos los ataques hacemos iteraciones por cada elemento interno que tenga/*/
function seeAttacks(attacksPetsType)
{
    attacksPetsType.forEach((attackElements) =>
    {
    /*/Se crea los botones de ataques, con el nombre etc / */
        countElements =
        `
        <button id = ${attackElements.id} class="button buttonAttack">${attackElements.nombre}</button>
        `
        buttonsAttackPet.innerHTML += countElements
    })
    /*/Se llaman los botones individuales ademas de un seleccionador global de que todas las variables poseen con la clase/*/
    buttonFire   = document.getElementById('button-fire')
    buttonWater = document.getElementById('button-water')
    buttonLand   = document.getElementById('button-land')
    buttons = document.querySelectorAll('.buttonAttack')
    }
/*/Se selecciona la mascota enemiga/*/
function selectPetsEnemy(enemy) 
{
    /*/Muestra el animal seleccionado /*/
    petSelectEnemy.innerHTML = petEnemy.name
    lifeEnemy = petEnemy.life
    /*/Muestra las vidas iniciales del enemigo y del jugador/*/
    spanLifePlayer.innerHTML = lifePlayer
    spanLifeEnemy.innerHTML = lifeEnemy
    /////////////////////////////////////////////
    sequenceAttack()
    }
/*/Logica de ataque/*/
function sequenceAttack()
{
    buttons.forEach((button)=>
    {
        button.addEventListener('click' , (e) =>
        {
            if (e.target.textContent === fireLogic)
            {
                attackPlayer.push(fireLogic)
                button.disabled = true
                button.style.background = '#f90e0e30'
                style()
            }
            else if (e.target.textContent === waterLogic )
            {
                attackPlayer.push(waterLogic)
                button.disabled = true
                button.style.background = '#1d28c590'
                style()
            }
            else
            {
                attackPlayer.push(landLogic)
                button.disabled = true
                button.style.background = '#52252f80'
                style()
            }
            function style ()
            {
                button.style.border = '4px solid white'
                button.style.color = 'white'
            }
            /*/Por cada elemento seleccionado se va al a funcion para comprobar que los ataques del jugador ya esten todos seleccionados si llega a ser si entonces por fin atacamos/*/
            if(attackPlayer.length === 5 )
            {
                sendAttacks ()
            }
        })
    })
}
function sendAttacks()
{
    fetch(`http://192.168.1.10:8080/mokepon/${playerId}/attacks`, {
        method: 'post',
        headers : {
            'Content-Type' :  'application/json'
        },
        body: JSON.stringify ({
            attacks: attackPlayer
        })
    })
    interval = setInterval(obtainAttacks, 500)
}
function obtainAttacks ()
{
    fetch(`http://192.168.1.10:8080/mokepon/${enemyId}/attacks`)
        .then(function (res)
        {
            if(res.ok)
            {
                res.json()
                    .then(function({attacks}){
                        if (attacks.length === 5)
                        {
                            attackEnemy = attacks
                            combat ()
                        }
                    })
            }
        })
}
function combat ()
{
    clearInterval(interval)
    for (let i = 0; i < 5 ; i++) {
        if (attackPlayer[i] === attackEnemy[i])
        {
            varCombatFunction (i ,  i)
            messageAttackPlayers()
        }
        else if( attackPlayer[i] == fireLogic && attackEnemy[i] == landLogic || attackPlayer[i] == waterLogic && attackEnemy[i] == fireLogic || attackPlayer == landLogic || attackEnemy == waterLogic)
        {
            varCombatFunction (i ,  i)
            messageAttackPlayers()
            lifeEnemy--
        }
        else 
        {
            varCombatFunction (i ,  i)
            messageAttackPlayers()
            lifePlayer--
        }
    }
function messageAttackPlayers ()
{
        /*/Muestra mensajes de los ataques enemigos y aliados, ademas de mostrar si ganaste o perdiste el combate/*/
        
            let newAttackPlayer = document.createElement('p')
            let newAttackEnemy = document.createElement('p')
            /*/Crea los parrafos /*/
            newAttackPlayer.innerHTML = varAttackPlayer
            newAttackEnemy.innerHTML = varAttackEnemy
            /*/Abre un espacio para agregar la info /*/
            attackPlayerM.appendChild(newAttackPlayer )
            attackEnemyM.appendChild(newAttackEnemy )
        

}
    /*/Cambia el mensajes de cuantas vidas tiene el jugador aliado y enemigo/*/
    spanLifePlayer.innerHTML = lifePlayer
    spanLifeEnemy.innerHTML = lifeEnemy
    lives ()
    function lives () {
            if(lifeEnemy < 0){
                lifeEnemy = 0
            } else if(lifePlayer < 0) {
                lifeEnemy = 0 
            }  else if (lifePlayer < lifeEnemy){
                endMessage("Perdiste el tonero :(")
            } else if (lifeEnemy < lifePlayer) {
                endMessage("Ganaste el torneo!!!")
            }  else{
                endMessage("Empataste!!!")
            }
    }
}
function varCombatFunction (Player ,  Enemy)
{
    varAttackPlayer = attackPlayer[Player]
    varAttackEnemy = attackEnemy[Enemy]
}
function endMessage (finalResults) 
{
    notification.innerHTML= finalResults
    sectionRestart.style.display = 'inline-block'
}

function restartPlay() {
    location.reload()
}
function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min )
}
function paintCanvas(){

    petPlayer.x = petPlayer.x + petPlayer.speedX
    petPlayer.y = petPlayer.y + petPlayer.speedY
    canvas.clearRect(0, 0, map.width, map.height)
    canvas.drawImage(
        mapBackground,
        0,
        0
        )
        petPlayer.paintMokepon ()

        sendPosition(petPlayer.x , petPlayer.y)

        mokeponesEnemies.forEach(function (mokepon){
            if(mokepon != undefined){
                mokepon.paintMokepon()
                checkCollision(mokepon)
            }
        })
}
function sendPosition (x , y)
{
    fetch(`http://192.168.1.10:8080/mokepon/${playerId}/position` , {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res){
        if (res.ok)
        {
            res.json()
                .then(function ({enemys})
                    {
                        console.log(enemys)
                        mokeponesEnemies = enemys.map(function (enemy){
                            let mokeponEnemy = null
                            if (enemy.mokepon != undefined)
                            {
                                const mokeponName = enemy.mokepon.name || ""
                                if(mokeponName === 'Capipepo'){
                                mokeponEnemy = new Mokepon('Capipepo' , './img/Capipepo-787.png' , 5 , 'capipepo_select' , 'capipepo_img' ,  './img/Capipepo.png' , enemy.id )
                                } else if (mokeponName === 'Hipodoge'){
                                mokeponEnemy = new Mokepon('Hipodoge' , ' ./img/Hipodoge-787.png', 4 , 'hipodoge_select' , 'hipodoge_img' , './img/Hipodoge.png', enemy.id )
                                } else if (mokeponName === 'Ratigueya'){
                                mokeponEnemy = new Mokepon('Ratigueya' , './img/Ratigueya-787.png' , 4 , 'ratigueya_select' , 'ratigueya_img', './img/Ratigueya.png' , enemy.id)
                                } else if (mokeponName === 'Tucapalma') {
                                mokeponEnemy = new Mokepon('Tucapalma' , './img/Tupacalma-787.png', 5 , 'tupacalma_select' , 'tupacalma_img' , './img/Tucapalma.png' , enemy.id )
                                } else if (mokeponName === 'Pydos') {
                                mokeponEnemy = new Mokepon('Pydos' , './img/Pydos-787.png' , 5 , 'pydos_select' , 'pydos_img' , './img/Pydos.png' , enemy.id)
                                } else if (mokeponName === 'Langostelvis')  {
                                mokeponEnemy = new Mokepon('Langostelvis' , './img/Langostelvis-787.png' , 5 , 'langostelvis_select' , 'langostelvis_img' , './img/Langostelvis.png' , enemy.id)
                                }
                                mokeponEnemy.x = enemy.x
                                mokeponEnemy.y = enemy.y
                                return mokeponEnemy
                            }
                        })
                    })
        }
    })
}
function moveCharacterRight ()
{
    petPlayer.speedX = 5
}
function moveCharacterDown ()
{
    petPlayer.speedY = 5
}
function moveCharacterLeft ()
{
    petPlayer.speedX = - 5
}
function moveCharacterUp ()
{
    petPlayer.speedY = -5
}
function stopMove ()
{
    petPlayer.speedX = 0
    petPlayer.speedY = 0
}
function touchKeyboard (event)
{
    switch (event.key) {
        case 'ArrowUp':
            moveCharacterUp ()
            break
        case 'ArrowDown':
            moveCharacterDown ()
            break
        case 'ArrowLeft' :
            moveCharacterLeft ()
            break
        case 'ArrowRight' :
            moveCharacterRight ()
            break
        case 'w':
            moveCharacterUp ()
            break
        case  's':
            moveCharacterDown ()
            break
        case 'a':
            moveCharacterLeft ()
            break
        case  'd':
            moveCharacterRight ()
            break
        default:
            break
    }
}
function startMap ()
{
    interval = setInterval(paintCanvas, 50)
    window.addEventListener('keydown' , touchKeyboard)
    window.addEventListener('keyup', stopMove)
}

function checkCollision (enemy)
{  
    const upEnemy = enemy.y
    const downEnemy = enemy.y + enemy.height
    const rightEnemy = enemy.x + enemy.width
    const leftEnemy = enemy.x

    const upPet= petPlayer.y
    const downPet= petPlayer.y + petPlayer.height
    const rightPet= petPlayer.x + petPlayer.width
    const leftPet= petPlayer.x


    if(
        downPet < upEnemy ||
        upPet > downEnemy ||
        rightPet < leftEnemy ||
        leftPet > rightEnemy
        )
        {
            return
        }
    if (enemy.x == undefined || enemy.y == undefined ) {
        return
    }
    else
    {
        petEnemy = enemy
        stopMove()
        clearInterval(interval)
        enemyId = enemy.idP
        selectPetsEnemy(enemy)
    }
}
window.addEventListener('load', startPlay)
