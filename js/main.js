const sectionAttack = document.getElementById('select-attacks')
const sectionRestart = document.getElementById('restart')
const buttomPetPlayer = document.getElementById('button-pet')


const buttonrestart = document.getElementById('button-restart')

const sectionPets = document.getElementById('select-pets')

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
let attackPlayer 
let attackEnemy 
let win
let optionsMokepons
let inputHipodoge      
let inputCapipepo      
let inputRatigueya    
let buttonMokepons
let attackPets
let lifePlayer = 3;
let lifeEnemy = 3;
let buttonFire1
let buttonFire2
let buttonFire3
let buttonWater1
let buttonWater2
let buttonLand1
let buttonLand2



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
    {     nombre: 'Fire 🔥' , id: 'button-fire1'        },
    {     nombre: 'Fire 🔥' , id: 'button-fire2'        },
    {     nombre: 'Fire 🔥' , id: 'button-fire3'        },
    {     nombre: 'Water 💧' , id: 'button-water1'     },
    {     nombre: 'Land 🌱' , id: 'button-land1'      },
)
petHipodoge.attacks.push
(
    {     nombre: 'Fire 🔥' , id: 'button-fire1'        },
    {     nombre: 'Water 💧' , id: 'button-water1'     },
    {     nombre: 'Water 💧' , id: 'button-water2'     },
    {     nombre: 'Land 🌱' , id: 'button-land1'      },
    {     nombre: 'Land 🌱' , id: 'button-land2'      },
)
petRatigueya.attacks.push
(
    {     nombre: 'Fire 🔥' , id: 'button-fire1'        },
    {     nombre: 'Fire 🔥' , id: 'button-fire2'        },
    {     nombre: 'Water 💧' , id: 'button-water1'     },
    {     nombre: 'Land 🌱' , id: 'button-land1'      },
    {     nombre: 'Land 🌱' , id: 'button-land2'      },
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
            attacksPlayer ()
    } else if (inputCapipepo.checked)
    {
            petSelectPlayer = inputCapipepo.id
            attacksPlayer ()
    }else if (inputRatigueya.checked)
    {
            petSelectPlayer = inputRatigueya.id
            attacksPlayer ()
    }else {
            alert ("¡No seleccionaste un animal escogeremos a ElectricDefault!")
            petSelectPlayer = "ElectricDefault"
            attacksPlayer ()
    }
    function attacksPlayer ()
    {
            if (mokepones[0].name == petSelectPlayer)
            {
                petCapipepo.attacks.forEach((ataques) =>
                {
                        countAttacks = 
                        `
                            <button id = ${ataques.id} class="button">${ataques.nombre}</button>
                        `
                        buttonsAttackPet.innerHTML += countAttacks
                        buttonFire1 = document.getElementById(petCapipepo.attacks[0].id)
                        buttonFire2 = document.getElementById(petCapipepo.attacks[1].id)
                        buttonFire3 = document.getElementById(petCapipepo.attacks[2].id)
                        buttonWater1 = document.getElementById(petCapipepo.attacks[3].id)
                        buttonLand1   = document.getElementById(petCapipepo.attacks[4].id)
                }
                )
                buttonFire1.addEventListener('click' , attackFire)
                buttonFire2.addEventListener('click' , attackFire)
                buttonFire3.addEventListener('click' , attackFire)
                buttonWater1.addEventListener('click' , attackWater)
                buttonLand1.addEventListener('click' , attackLand)
            }
            else if (mokepones[1].name == petSelectPlayer)
            {
                petHipodoge.attacks.forEach((ataques) =>
                {
                        countAttacks = 
                        `
                            <button id = ${ataques.id} class="button">${ataques.nombre}</button>
                        `
                        buttonsAttackPet.innerHTML += countAttacks
                        buttonFire1 = document.getElementById(petHipodoge.attacks[0].id)
                        buttonWater1 = document.getElementById(petHipodoge.attacks[1].id)
                        buttonWater2 = document.getElementById(petHipodoge.attacks[2].id)
                        buttonLand1 = document.getElementById(petHipodoge.attacks[3].id)
                        buttonLand2   = document.getElementById(petHipodoge.attacks[4].id)
                }
                )
                buttonFire1.addEventListener('click' , attackFire)
                buttonWater1.addEventListener('click' , attackWater)
                buttonWater2.addEventListener('click' , attackWater)
                buttonLand1.addEventListener('click' , attackLand)
                buttonLand2.addEventListener('click' , attackLand)
            }
            else if (mokepones[2].name == petSelectPlayer)
            {
                petRatigueya.attacks.forEach((ataques) =>
                {
                        countAttacks = 
                        `
                            <button id = ${ataques.id} class="button">${ataques.nombre}</button>
                        `
                        buttonsAttackPet.innerHTML += countAttacks
                        buttonFire1 = document.getElementById(petRatigueya.attacks[0].id)
                        buttonFire2 = document.getElementById(petRatigueya.attacks[1].id)
                        buttonWater1 = document.getElementById(petRatigueya.attacks[2].id)
                        buttonLand1 = document.getElementById(petRatigueya.attacks[3].id)
                        buttonLand2   = document.getElementById(petRatigueya.attacks[4].id)
                }
                )
                buttonFire1.addEventListener('click' , attackFire)
                buttonFire2.addEventListener('click' , attackFire)
                buttonWater1.addEventListener('click' , attackWater)
                buttonLand1.addEventListener('click' , attackLand)
                buttonLand2.addEventListener('click' , attackLand)
            }
            else
            {
            petCapipepo.attacks.forEach((ataques) =>
            {
                countAttacks = 
                `
                        <button id = ${ataques.id} class="button">${ataques.nombre}</button>
                `
                buttonsAttackPet.innerHTML += countAttacks
                buttonFire1 = document.getElementById(petCapipepo.attacks[0].id)
                buttonFire2 = document.getElementById(petCapipepo.attacks[1].id)
                buttonFire3 = document.getElementById(petCapipepo.attacks[2].id)
                buttonWater1 = document.getElementById(petCapipepo.attacks[3].id)
                buttonLand1   = document.getElementById(petCapipepo.attacks[4].id)
            }
            )
            buttonFire1.addEventListener('click' , attackFire)
            buttonFire2.addEventListener('click' , attackFire)
            buttonFire3.addEventListener('click' , attackFire)
            buttonWater1.addEventListener('click' , attackWater)
            buttonLand1.addEventListener('click' , attackLand)
            }
    }


    document.getElementById('pet-player').innerHTML = petSelectPlayer
    selectPetsEnemy()
}

/*/Se selecciona la mascota enemiga/*/
function selectPetsEnemy() 
{
    let randomPet  = random(0 , mokepones.length -1)
    petSelectEnemy.innerHTML = mokepones[randomPet].name
}

/*/Se escoge el ataque /*/      
function attackFire() 
{
    attackPlayer = 'Fuego'
    attackRandomEnemy ()
}
function attackWater() {
    attackPlayer = 'Agua'
    attackRandomEnemy ()
}
function attackLand(){
    attackPlayer = 'Tierra'
    attackRandomEnemy ()
}

/*/El pc escoge el ataque deseado conforme un numero aleatorio/*/
function attackRandomEnemy(){
    let attackRandom = random(1,3)  

    if (attackRandom == 1){
            attackEnemy = 'Fuego'
    } else if (attackRandom == 2){
            attackEnemy = 'Agua'
    } else  if (attackRandom == 3){
            attackEnemy = 'Tierra'
    }

combat ()
}
function combat ()
{
    if (attackPlayer == attackEnemy){
            win = "Empataste el combate"
    } else if ( attackPlayer == 'Fuego' && attackEnemy == 'Tierra' || attackPlayer == 'Agua' && attackEnemy == 'Fuego' || attackPlayer == 'Tierra' && attackEnemy == 'Agua'){
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
    buttonFire1.disabled = true 
    buttonWater1.disabled = true
    buttonLand1.disabled = true

    if(mokepones[0].name == petSelectPlayer)
    {
            buttonFire2.disabled = true 
            buttonFire3.disabled = true 
    }
    else if(mokepones[1].name == petSelectPlayer)
    {
            buttonWater2.disabled = true
            buttonLand2.disabled = true
    }
    else if(mokepones[2].name == petSelectPlayer)
    {
            buttonFire2.disabled = true 
            buttonLand2.disabled = true
    }
    else 
    {
            buttonFire2.disabled = true 
            buttonFire3.disabled = true 
    }
    sectionRestart.style.display = 'inline-block'
}

function restartPlay() {
    location.reload()
}
function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min )
}
window.addEventListener('load', startPlay)
