const sectionAttack = document.getElementById('select-attacks')
const sectionRestart = document.getElementById('restart')
const buttomPetPlayer = document.getElementById('button-pet')

const buttonrestart = document.getElementById('button-restart')

const sectionPets = document.getElementById('select-pets')

const spanNamePlayer = document.getElementById('pet-player')
const spanLifePlayer = document.getElementById('live-pet-player')
const spanLifeEnemy = document.getElementById('live-pet-enemy')

const notification = document.getElementById('result')
const attackPlayerM = document.getElementById('attack-player')
const attackEnemyM = document.getElementById('attack-enemy')
const containerCard = document.getElementById('container-card')
const containerButton =  document.getElementById('container-button')
const petSelectEnemy = document.getElementById('pet-enemy')
const buttonsAttackPet = document.getElementById('buttons-attack-pet')

/*/Inicializacion de las variables/*/
let mokepones = []
let attackPlayer = []
let attackEnemy = []
let win
let optionsMokepons
let inputHipodoge      
let inputCapipepo      
let inputRatigueya    
let buttonMokepons
let attackPets
let attackMokeponEnemy
let lifePlayer = 3;
let lifeEnemy = 3;
let buttonFire
let buttonWater
let buttonLand
let buttons = []
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
    {     nombre: fireLogic, id: 'button-fire'        },
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
)
petHipodoge.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
    {     nombre: landLogic , id: 'button-land'      },
)
petRatigueya.attacks.push
(
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: fireLogic , id: 'button-fire'        },
    {     nombre: waterLogic, id: 'button-water'     },
    {     nombre: landLogic , id: 'button-land'      },
    {     nombre: landLogic , id: 'button-land'      },
)

/*/Se guardan las variables/*/
mokepones.push (petCapipepo, petHipodoge, petRatigueya)

/*/Inicia el programa/*/
function startPlay(){

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
    
    }
    )
    
    /*/Efecto/*/
    capipepo.addEventListener("mouseover", () => {   afectado.className = "capipepo_img";    },   false   )
    capipepo.addEventListener("mouseout", () =>   {   afectado.className = "";                  },   false   )
    hipodoge.addEventListener("mouseover", () => {   afectado2.className = "hipodoge_img";    },   false   )
    hipodoge.addEventListener("mouseout", () =>   {   afectado2.className = "";                  },   false   )
    ratigueya.addEventListener("mouseover", () => {   afectado3.className = "ratigueya_img";    },   false   )
    ratigueya.addEventListener("mouseout", () =>   {   afectado3.className = "";                  },   false   )

}
    /*/Elementos /*/
    buttomPetPlayer.addEventListener('click' , selectPetPlayer)
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
    } else if (inputCapipepo.checked)
    {
            petSelectPlayer = inputCapipepo.id
    }else if (inputRatigueya.checked)
    {
            petSelectPlayer = inputRatigueya.id
    }else {
            alert ("¡No seleccionaste un animal escogeremos a ElectricDefault!")
            petSelectPlayer = "ElectricDefault"
    }

    spanNamePlayer.innerHTML = petSelectPlayer
    attackPlayers(petSelectPlayer)
    selectPetsEnemy()
}
function attackPlayers(petSelectPlayer)
{
    let attacksPetsType
    for (let i = 0; i  < mokepones.length  ; i++) 
    {
        if (mokepones[i].name == petSelectPlayer)
        {
            attacksPetsType = mokepones[i].attacks
        }
    }
    seeAttacks(attacksPetsType)
}
function seeAttacks(attacksPetsType)
{
    attacksPetsType.forEach((attackElements) =>
    {
        countElements =
        `
        <button id = ${attackElements.id} class="button buttonAttack">${attackElements.nombre}</button>
        `
        buttonsAttackPet.innerHTML += countElements
    })
    buttonFire   = document.getElementById('button-fire')
    buttonWater = document.getElementById('button-water')
    buttonLand   = document.getElementById('button-land')
    buttons = document.querySelectorAll('.buttonAttack')
}
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
                console.log(attackPlayer)
                button.style.background = '#f90e0e30'
                style()
            }
            else if (e.target.textContent === waterLogic )
            {
                attackPlayer.push(waterLogic)
                button.disabled = true
                console.log(attackPlayer)
                button.style.background = '#1d28c590'
                style()
            }
            else
            {
                attackPlayer.push(landLogic)
                button.disabled = true
                console.log(attackPlayer)
                button.style.background = '#52252f80'
                style()
            }
            function style ()
            {
                button.style.border = '4px solid white'
                button.style.color = 'white'
            }
            attackRandomEnemy()
        })
    })

}
/*/Se selecciona la mascota enemiga/*/
function selectPetsEnemy() 
{
    let randomPet  = random(0 , mokepones.length -1)
    petSelectEnemy.innerHTML = mokepones[randomPet].name
    attackMokeponEnemy = mokepones[randomPet].attacks
    sequenceAttack()
}

/*/El pc escoge el ataque deseado conforme un numero aleatorio/*/
function attackRandomEnemy(){
    let attackRandom = random(0 , attackMokeponEnemy.length -1)  

    if (attackRandom == 0 || attackRandom == 1){
            attackEnemy.push (fireLogic)
    } else if (attackRandom == 2 || attackRandom == 5){
            attackEnemy.push (waterLogic)
    } else  if (attackRandom == 3 || attackRandom == 4){
            attackEnemy.push (landLogic)
    }
    console.log(attackEnemy)
combat ()
}
function combat ()
{
    if (attackPlayer == attackEnemy){
            win = "Empataste el combate"
    } else if ( attackPlayer == fireLogic && attackEnemy == landLogic || attackPlayer == waterLogic && attackEnemy == fireLogic || attackPlayer == landLogic && attackEnemy == waterLogic){
            win = "Ganaste el combate"
            lifeEnemy--
    } else {
            win = "Perdiste el combate"
            lifePlayer--
    }
    /*/Cambia el mensajes de cuantas vidas tiene el jugador aliado y enemigo/*/
    spanLifePlayer.innerHTML = lifePlayer
    spanLifeEnemy.innerHTML = lifeEnemy
    createMessage ()
    lives ()
    function lives () {
            if (lifePlayer == 0)
            {
                endMessage("Perdiste el tonero :(")
            } else if (lifeEnemy == 0) {
                endMessage("Ganaste el torneo!!!")
            }
    }
}
function createMessage () 
{
    /*/Muestra mensajes de los ataques enemigos y aliados, ademas de mostrar si ganaste o perdiste el combate/*/
    let newAttackPlayer = document.createElement('p')
    let newAttackEnemy = document.createElement('p')

    notification.innerHTML = win
    newAttackPlayer.innerHTML = attackPlayer
    newAttackEnemy.innerHTML = attackEnemy

    /*/Crea los parrafos /*/
    attackPlayerM.appendChild(newAttackPlayer )
    attackEnemyM.appendChild(newAttackEnemy )

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
