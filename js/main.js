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
let petHipodoge = new Mokepon('Hipodoge' , './img/Capipepo-787.png' , 5 , 'hipodoge_select' , 'hipodoge_img' , 'affected2')
let petRatigueya = new Mokepon('Ratigueya' , './img/Ratigueya-787.png' , 4 , 'ratigueya_select' , 'ratigueya_img' , 'affected3')
/*/Ataques individuales/*/
petCapipepo.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
)
petHipodoge.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
)
petRatigueya.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
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
/*             hipodogeAttacksArray()
 */    } else if (inputCapipepo.checked)
    {
            petSelectPlayer = inputCapipepo.id
            lifePlayer = mokepones[0].life
/*             capipepoAttacksArray()
 */    }else if (inputRatigueya.checked)
    {
            petSelectPlayer = inputRatigueya.id
            lifePlayer = mokepones[2].life
/*             ratigueyaAttacksArray()
 */    }else 
    {
        alert("DEBES SELECCIONAR UN ANIMAL")
        location.reload()
    }
    function hipodogeAttacksArray ()
    {
        petHipodoge.attacks.push
        (
            {     nombre: landLogic , id: 'button-land'        },
        )
    }
    function capipepoAttacksArray ()
    {
        petCapipepo.attacks.push
        (
            {     nombre: fireLogic , id: 'button-fire'        },
            {     nombre: fireLogic , id: 'button-fire'        },
            {     nombre: fireLogic , id: 'button-fire'        },
        )
    }
    function ratigueyaAttacksArray ()
    {
        petRatigueya.attacks.push
        (
            {     nombre: fireLogic , id: 'button-fire'        },
            {     nombre: fireLogic , id: 'button-fire'        },
        )
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
        })
    })
    attackRandomEnemy()
}
/*/Logica de ataque enemiga/*/
function attackRandomEnemy(){
    for (let i = 0; i < attackMokeponEnemy.length; i++) 
    {
        randomAttacks.push(random(0 , attackMokeponEnemy.length -1) )
        console.log(randomAttacks)
    } 
    arrayElementEnemy()
    startFight()
}
function arrayElementEnemy ()
{
    for (let i = 0; i < randomAttacks.length; i++) 
    {
        for (let f = i+1 ; f < randomAttacks.length; f++) 
        {
            if (i != f)
            {
                if(randomAttacks[i] == randomAttacks[f])
                {

                    if (randomAttacks[f] == randomAttacks.length - 1)
                        {   randomAttacks[f] = 3  }
                    else if (randomAttacks[i] == randomAttacks[f] && randomAttacks[i] == 3)
                        {  randomAttacks[f] = 2 }
                    else if (randomAttacks[i] == randomAttacks[f] && randomAttacks[f] == 2)
                        {    randomAttacks[f] = 1  }
                    else if (randomAttacks[i] != 0)
                        {  randomAttacks[f] = 0  }
                    else if (randomAttacks[i] != 4)
                        {  randomAttacks[f] = 4  }
                    else if (randomAttacks[i] == 0 )
                        {  randomAttacks[f]  = 1    }
                    else if (randomAttacks[i] == 4 )
                        {  randomAttacks[f]  = 3    }
                    else
                        {
                            if (randomAttacks[f] == randomAttacks.length - 2)
                                { randomAttacks[f] = randomAttacks [f] + 1 }
                            else if (randomAttacks[f] == 1)
                                { randomAttacks[f] = randomAttacks [f] + 1 }
                            else
                                {   randomAttacks[f] = randomAttacks [f] + 1    }
                        }
                    arrayElementEnemy()

                }
            }
        }
    }
}
/*/
function arrayElementEnemy ( )
{
    for (let i = 0; i < randomAttacks.length; i++) 
    {
        for (let f = i+1 ; f < randomAttacks.length; f++) 
        {
            if (i != f)
            {
                if(randomAttacks[i] == randomAttacks[f])
                console.log("Elementos" + randomAttacks[i] )
                {
                    if (randomAttacks[i] == 0 )
                        {  randomAttacks[f]  = 1    }

                    else if (randomAttacks[i] == randomAttacks.length - 1 )
                        {  randomAttacks[f] = randomAttacks [f] - 1    }
                        
                    else if (randomAttacks[i] == randomAttacks[f])
                        {
                            if (randomAttacks[i] == 3)
                                {   randomAttacks[f] = 2     }
                            if (randomAttacks[i] == 2)
                                { randomAttacks[f] = 1 }
                            else if  (randomAttacks[i] < randomAttacks.length - 2)
                                {   randomAttacks[f] = randomAttacks [f] + 1 }
                        }

                    else if (randomAttacks[i] != 0)
                        {  randomAttacks[f] = 0  }
                        
                    else if (randomAttacks[i] != 4)
                        {  randomAttacks[f] = 4  }
                }
                arrayElementEnemy (w + 1)

            }
        }
    }
}
/*/

/*     if (randomAttacks[i] == 0 )
    {
        attackEnemy.push(attackMokeponEnemy[0].nombre)
    }
    else if (randomAttacks[i] == 1)
    {
        attackEnemy.push(attackMokeponEnemy[1].nombre)
    } */


/*     let attackRandom = random(0 , attackMokeponEnemy.length -1)  

    if (attackRandom == 0 || attackRandom == 1){
            attackEnemy.push (fireLogic)
    } else if (attackRandom == 2 || attackRandom == 5){
            attackEnemy.push (waterLogic)
    } else  if (attackRandom == 3 || attackRandom == 4){
            attackEnemy.push (landLogic)
    } */

function startFight ()
/*/La logica de pelea inicia cuando el contador llege al limite de elementos de botones/*/
{
    for (let i = 0; i < mokepones.length; i++)
    {
        if(mokepones[i].name == petSelectPlayer)
        {
            if(mokepones[i].attacks.length == attackPlayer.length)
            {
                combat ()
            }
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
