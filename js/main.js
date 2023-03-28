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
let randomAttacks = []
/*/Mokepon /*/
let optionsMokepons
let buttonMokepons
let attackMokeponEnemy
/*/Pets/*/
let inputHipodoge      
let inputCapipepo      
let inputRatigueya  
let inputTucapalma
let inputPydos
let inputLangostelvis
let petPlayer
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
mapBackground.src = './img/mokemap.png'
let heightMapIdeal
let widthMap = window.innerWidth 
const widthMaxMap = 300

if (widthMap > widthMaxMap) {
    widthMap = widthMaxMap 
}
heightMapIdeal = widthMap * 600 / 800

map.width = widthMap
map.height = heightMapIdeal
/*/Creacion de componentes/*/
class Mokepon 
{
    constructor (name, img, life, id, actions, imgMap , x = 30 , y = 20 )
    {
            this.name = name
            this.img = img
            this.life = life
            this.id = id
            this.actions =  actions
            this.attacks = []
            this.x = x
            this.y = y
            this.width = 80
            this.height = 80
            this.mapImg = new Image ()
            this.mapImg.src = imgMap
            this.speedX = 0
            this.speedY = 0
        }

        paintMokepon ()
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
let petPydos = new Mokepon('Pydos' , './img/Pydos-787.png' , 5 , 'pydos_select' , 'pydos_img' , './img/Pydos.png')
let petTucapalma = new Mokepon('Tucapalma' , './img/Tupacalma-787.png', 5 , 'tupacalma_select' , 'tupacalma_img' , './img/Tucapalma.png')
let petLangostelvis = new Mokepon('Langostelvis' , './img/Langostelvis-787.png' , 5 , 'langostelvis_select' , 'langostelvis_img' , './img/Langostelvis.png')


let petCapipepoEnemy = new Mokepon('Capipepo' , './img/Capipepo-787.png' , 5 , 'capipepo_select' , 'capipepo_img' ,  './img/Capipepo.png'  , 580 , 500)
let petHipodogeEnemy = new Mokepon('Hipodoge' , ' ./img/Hipodoge-787.png', 4 , 'hipodoge_select' , 'hipodoge_img' , './img/Hipodoge.png' , 450 , 125)
let petRatigueyaEnemy = new Mokepon('Ratigueya' , './img/Ratigueya-787.png' , 4 , 'ratigueya_select' , 'ratigueya_img', './img/Ratigueya.png', 280, 360)
let petPydosEnemy = new Mokepon('Pydos' , './img/Pydos-787.png' , 5 , 'pydos_select' , 'pydos_img' , './img/Pydos.png' , 320 , 120)
let petTucapalmaEnemy = new Mokepon('Tucapalma' , './img/Tupacalma-787.png', 5 , 'tupacalma_select' , 'tupacalma_img' , './img/Tucapalma.png', 120 , 240)
let petLangostelvisEnemy = new Mokepon('Langostelvis' , './img/Langostelvis-787.png' , 5 , 'langostelvis_select' , 'langostelvis_img' , './img/Langostelvis.png', 50, 320)

/*/Ataques individuales/*/
petCapipepo.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
)
petHipodoge.attacks.push
(
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
    {     nombre: fireLogic , id: 'button-fire'        },
)
petRatigueya.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
)
petLangostelvis.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: landLogic , id: 'button-land'      },
)
petTucapalma.attacks.push
(
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
)
petPydos.attacks.push
(
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: fireLogic , id: 'button-fire'        },
)
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

/*/Animacion que al seleccionar un animal este se muestre como img/*/
function selectPetPlayer () 
{
    sectionAttack.style.display = 'inline-block'
    startMap()
    sectionPets.style.display = 'none'

    /*/Se verifica el animal seleccionado con el id /*/
    if (inputCapipepo.checked)
    {
            petSelectPlayer = inputCapipepo.id
            petPlayer=  petCapipepo 
            lifePlayer = mokepones[0].life
            capipepoAttacksArray()
    } else if (inputHipodoge.checked)
    {
            petSelectPlayer = inputHipodoge.id
            petPlayer=  petHipodoge 
            lifePlayer = mokepones[1].life
            hipodogeAttacksArray()
    } else if (inputRatigueya.checked)
    {
            petSelectPlayer = inputRatigueya.id
            petPlayer = petRatigueya
            lifePlayer = mokepones[2].life
            ratigueyaAttacksArray()
    }else if (inputPydos.checked)
    {
            petSelectPlayer = inputPydos.id
            petPlayer = petPydos
            lifePlayer = mokepones[3].life
            pydosAttacksArray()
    }else if (inputTucapalma.checked)
    {
            petSelectPlayer = inputTucapalma.id
            petPlayer = petTucapalma
            lifePlayer = mokepones[4].life
            tucapalmaAttacksArray()
    }else if (inputLangostelvis.checked)
    {
            petSelectPlayer = inputLangostelvis.id
            petPlayer = petLangostelvis
            lifePlayer = mokepones[5].life
            langostelvisAttacksArray()
    }else 
    {
        alert("DEBES SELECCIONAR UN ANIMAL")
        location.reload()
    }
    
    /*/////////////////////////////////CANVAS/*///////////////////////////////*/
    /*     canvas.fillRect(5 , 15 , 20 , 40) /*/ 

    spanNamePlayer.innerHTML = petSelectPlayer
    attackPlayers(petSelectPlayer)
}
/*/Si la mascota seleccionada es igual a algun mokepon/*/
function attackPlayers(petSelectPlayer)
{
    let attacksPetsType
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
function hipodogeAttacksArray ()
    {
        petHipodoge.attacks.push
        (
            {     nombre: landLogic , id: 'button-land'        },
            {     nombre: landLogic , id: 'button-land'        }
        )
    }
function capipepoAttacksArray ()
    {
        petCapipepo.attacks.push
        (
            {     nombre: fireLogic , id: 'button-fire'        },
            {     nombre: fireLogic , id: 'button-fire'        }
        )
    }
function ratigueyaAttacksArray ()
    {
        petRatigueya.attacks.push
        (
            {     nombre: fireLogic , id: 'button-fire'        },
            {     nombre: fireLogic , id: 'button-fire'        }
        )
    }
function pydosAttacksArray ()
    {
        petPydos.attacks.push
        (
            {     nombre: landLogic , id: 'button-land'        },
            {     nombre: landLogic , id: 'button-land'        }
        )
    }
function tucapalmaAttacksArray ()
    {
        petTucapalma.attacks.push
        (
            {     nombre: landLogic , id: 'button-land'        },
            {     nombre: fireLogic , id: 'button-fire'        }
        )
    }
function langostelvisAttacksArray ()
    {
        petLangostelvis.attacks.push
        (
            {     nombre: fireLogic , id: 'button-fire'        },
            {     nombre: fireLogic , id: 'button-fire'        },
        )
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
let randomPet  = random(0 , mokepones.length -1)
let petEnemyRandomSelect = mokepones[randomPet].name
function selectPetsEnemy(enemy) 
{
    /*/Muestra el animal seleccionado /*/
    petSelectEnemy.innerHTML = enemy.name
    attackMokeponEnemy = enemy.attacks
    for (let i = 0; i < mokepones.length; i++) {
        if (petEnemyRandomSelect == mokepones[i].name)
        {
            lifeEnemy = mokepones[i].life
            switch (petSelectPlayer != petEnemyRandomSelect  )
                {
                    case (petEnemyRandomSelect == inputHipodoge.id):
                        hipodogeAttacksArray()
                        break
                    case (petEnemyRandomSelect == inputCapipepo.id):
                        capipepoAttacksArray()
                        break
                    case (petEnemyRandomSelect == inputRatigueya.id):
                        ratigueyaAttacksArray()
                        break
                    case (petEnemyRandomSelect == inputPydos.id):
                        pydosAttacksArray()
                        break
                    case (petEnemyRandomSelect == inputLangostelvis):
                        langostelvisAttacksArray()
                        break
                    case (petEnemyRandomSelect == inputTucapalma):
                        tucapalmaAttacksArray ()
                        break
                    default:
                        break
                }

        }
    }
    /*/Muestra las vidas iniciales del enemigo y del jugador/*/
    spanLifePlayer.innerHTML = lifePlayer
    spanLifeEnemy.innerHTML = lifeEnemy
    attackMokeponEnemy = mokepones[randomPet].attacks
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
            startFight ()
        })
    })
}
/*/La logica de pelea inicia cuando el contador llege al limite de elementos de botones/*/
function startFight ()
{
    /*/Itera para descubrir que mokepon es y con eso saber que tamaño debe ser el del array pa que sea verdadero/*/
    for (let i = 0; i < mokepones.length; i++)
    {
        if(mokepones[i].name == petSelectPlayer)
        {
            if(mokepones[i].attacks.length == attackPlayer.length)
            {
                attackRandomEnemy()    
            }
        }
    }
}
/*/Se crean 5 numeros aleatorios/*/
function attackRandomEnemy(){
    for (let i = 0; i < attackMokeponEnemy.length; i++) 
    {
        randomAttacks.push(random(0 , attackMokeponEnemy.length -1) )
    } 
    arrayElementEnemyStart()
    }
/*/Se crea un bucle que para salir de el los numeors aleatorios deben ser distintos/*/
function arrayElementEnemyStart()
{    
    arrayElementEnemyBucle()   /*/Se crea el punto de partida del bucle/*/

    function arrayElementEnemyBucle()
    {
        for (let i = 0; i < randomAttacks.length; i++)   /*/Se crea el primer iterador de comparacion, este se mantiene durante toda la vida del 2do/*/
        {
            for (let f = i+1 ; f < randomAttacks.length; f++)   /*/Para evitar que se compare el primer elemento con el primer elemento y que se compare 2 con 3 y 3 con dos se suma el primer iterado al segundo para que este avanze mas de lo normal/*/
            {
                if (i != f) /*/Llega un punto donde se compara 1 con 1 y cuenta como par por tanto lo excluimos/*/
                {
                    if(randomAttacks[i] == randomAttacks[f])   /*/Si el caso 1 con 1 no ocurre pero los elementos de los arrays coinciden inicia el ciclo/*/
                    {
                        if (randomAttacks[f] == randomAttacks.length - 1) /*/Si el numero mayor esta repetido restale 1/*/
                            {   randomAttacks[f] = randomAttacks.length - 2  }
                        else if (randomAttacks[i] == randomAttacks[f] && randomAttacks[i] == randomAttacks.length - 2)  /*/Si el 2do numero mas grande esta repetido restale 1/*/
                            {  randomAttacks[f] = randomAttacks.length - 3 }
                        else if (randomAttacks[i] == randomAttacks[f] && randomAttacks[f] == randomAttacks.length - 3)  /*/ Si el 3cer numero mas grande esta repetido restale 1/*/
                            {    randomAttacks[f] = randomAttacks.length - 4  }  /*/ Si en todas los elementos no existe un 0 crea un 0 /*/
                        else if (randomAttacks[i] != 0)  
                            {  randomAttacks[f] = 0  }
                        else if (randomAttacks[i] != randomAttacks.length - 1) /*/ Si en todos los elementos no existe el numero mas grande crea el numero mas grande/*/
                            {  randomAttacks[f] = randomAttacks.length - 1  }
                        else if (randomAttacks[i] == 0 )  /*/Si existe un 0 repetido transformalo en 1/*/
                            {  randomAttacks[f]  = 1    }
                        else      /*/Si no ocurre algunos de estos casos intenta/*/
                            {
                                if (randomAttacks[f] == randomAttacks.length - 2)     /*/Si el 2do numero mas grande esta repetido sumale 1 /*/
                                    { randomAttacks[f] = randomAttacks [f] + 1 }
                                else if (randomAttacks[f] == 1)  /*/Si el numero repetido es 1 sumale 1/*/
                                    { randomAttacks[f] = randomAttacks [f] + 1 }
                                else  /*/Si a pesar de que nada de lo anterior ocurra sumale 1 /*/
                                    {   randomAttacks[f] = randomAttacks [f] + 1    }
                            }
                        arrayElementEnemyBucle()  /*/ Vuelve al inicio hasta que ningun numero quede repetido/*/
                    }
                }
            }
        }
    }
    pushAttacksEnemy()     /*/Si se acaba el bucle entoces empieza una nueva funcion/*/
    }
/*/Ya tenemoslos numeros aleatorios ahora asignemosle al array existente/*/
function pushAttacksEnemy()
{
    for (let i = 0; i < mokepones.length; i++)     /*/Crea un ciclo para encontrar cual mascota del enemigo fue escogida/*/
    {
        if(petEnemyRandomSelect == mokepones[i].name)
        {
            for (let f = 0; f < randomAttacks.length; f++)              /*/Crea un ciclo y en cada iteracion asignale el valor de los numeros aleatorios al array e inyectalos/*/
            {        
                attackEnemy.push (mokepones[i].attacks[randomAttacks[f]].nombre)
            }
            combat ()
        }
    }                
    }

function varCombatFunction (Player ,  Enemy)
{
    varAttackPlayer = attackPlayer[Player]
    varAttackEnemy = attackEnemy[Enemy]
}
function combat ()
{
    for (let i = 0; i < attackPlayer.length; i++) {
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
        0,
        )
        petPlayer.paintMokepon ()
        petHipodogeEnemy.paintMokepon ()
        petCapipepoEnemy.paintMokepon ()
        petRatigueyaEnemy.paintMokepon ()
        petLangostelvisEnemy.paintMokepon ()
        petPydosEnemy.paintMokepon ()
        petTucapalmaEnemy.paintMokepon ()
        if (petPlayer.speedX !== 0 || petPlayer.speedY !== 0)
        {
            checkCollision(petHipodogeEnemy)
            checkCollision(petCapipepoEnemy)
            checkCollision(petRatigueyaEnemy)
            checkCollision(petLangostelvisEnemy)
            checkCollision(petPydosEnemy)
            checkCollision(petTucapalmaEnemy)
        }
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
        leftPet > rightEnemy)
        {
            return
        }
    else
    {
        stopMove()
        clearInterval(interval)
        selectPetsEnemy(enemy)
            }
}
window.addEventListener('load', startPlay)
