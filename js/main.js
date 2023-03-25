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

/*/Creacion de componentes/*/
class Mokepon 
{
    constructor (name, img, life, id, actions, interaction )
    {
            this.name = name
            this.img = img
            this.life = life
            this.id = id
            this.actions =  actions
            this.interaction = interaction
            this.attacks = []
    }
}

/*/Datos indiviales por mokepon/*/
let petCapipepo = new Mokepon('Capipepo' , './img/Hipodoge-787.png' , 3 , 'capipepo_select' , 'capipepo_img' , 'affected1')
let petHipodoge = new Mokepon('Hipodoge' , './img/Capipepo-787.png' , 4 , 'hipodoge_select' , 'hipodoge_img' , 'affected2')
let petRatigueya = new Mokepon('Ratigueya' , './img/Ratigueya-787.png' , 4 , 'ratigueya_select' , 'ratigueya_img' , 'affected3')
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

/*/Se guardan las variables/*/
mokepones.push (petCapipepo, petHipodoge, petRatigueya)

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
            afectado = document.getElementById("capipepo_img")
            afectado2 = document.getElementById("hipodoge_img")
            afectado3 = document.getElementById("ratigueya_img")
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
            inputHipodoge      = document.getElementById('Hipodoge')
            inputCapipepo      = document.getElementById('Capipepo')
            inputRatigueya     = document.getElementById('Ratigueya')
    
            capipepo = document.getElementById("capipepo_select")
            hipodoge = document.getElementById("hipodoge_select")
            ratigueya = document.getElementById("ratigueya_select")
    })
    
    /*/Efecto/*/
    capipepo.addEventListener("mouseover", () => {   afectado.className = "capipepo_img";    },   false   )
    capipepo.addEventListener("mouseout", () =>   {   afectado.className = "";                  },   false   )
    hipodoge.addEventListener("mouseover", () => {   afectado2.className = "hipodoge_img";    },   false   )
    hipodoge.addEventListener("mouseout", () =>   {   afectado2.className = "";                  },   false   )
    ratigueya.addEventListener("mouseover", () => {   afectado3.className = "ratigueya_img";    },   false   )
    ratigueya.addEventListener("mouseout", () =>   {   afectado3.className = "";                  },   false   )
}

/*/Elementos /*/
buttonPetPlayer.addEventListener('click' , selectPetPlayer)
buttonrestart.addEventListener('click' , restartPlay)

/*/Animacion que al seleccionar un animal este se muestre como img/*/
function selectPetPlayer () 
{
    sectionAttack.style.display = 'inline-block'
    sectionPets.style.display = 'none'

    /*/Se verifica el animal seleccionado con el id /*/
    if (inputHipodoge.checked)
    {
            petSelectPlayer = inputHipodoge.id
            lifePlayer = mokepones[1].life
            hipodogeAttacksArray()
    } else if (inputCapipepo.checked)
    {
            petSelectPlayer = inputCapipepo.id
            lifePlayer = mokepones[0].life
            capipepoAttacksArray()
    }else if (inputRatigueya.checked)
    {
            petSelectPlayer = inputRatigueya.id
            lifePlayer = mokepones[2].life
            ratigueyaAttacksArray()
    }else 
    {
        alert("DEBES SELECCIONAR UN ANIMAL")
        location.reload()
    }
    
    spanNamePlayer.innerHTML = petSelectPlayer
    attackPlayers(petSelectPlayer)
    selectPetsEnemy()
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
function selectPetsEnemy() 
{
    /*/Muestra el animal seleccionado /*/
    petSelectEnemy.innerHTML = petEnemyRandomSelect
    for (let i = 0; i < mokepones.length; i++) {
        if (petEnemyRandomSelect == mokepones[i].name)
        {
            lifeEnemy = mokepones[i].life
            if(petSelectPlayer != petEnemyRandomSelect && petEnemyRandomSelect == inputHipodoge.id)
            {
                hipodogeAttacksArray()
            }
            else if(petSelectPlayer != petEnemyRandomSelect && petEnemyRandomSelect == inputCapipepo.id)
            {
                capipepoAttacksArray()
            }
            else if(petSelectPlayer != petEnemyRandomSelect && petEnemyRandomSelect == inputRatigueya.id)
            {
                ratigueyaAttacksArray()
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
            if (lifePlayer < lifeEnemy)
            {
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
window.addEventListener('load', startPlay)
