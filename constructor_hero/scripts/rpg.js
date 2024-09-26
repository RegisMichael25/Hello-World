class Character{
    constructor(classChar, life, strong){
        this.classChar = classChar
        this.life = life
        this.strong = strong
    }

    calcDamage(){
        let damage;

        if(this.classChar == 'warrior')
        {
            damage = (this.strong * 40) / 100
            return damage
        }
        else if(this.classChar == 'monster')
        {
            damage = (this.strong * 30) / 100
            return damage
        }
    }
    
    attack(){

        if(this.classChar == 'warrior')
        {  
            let lifeWarrior = warrior.life = warrior.life - this.calcDamage() 
            return lifeWarrior
        }
        else if(this.classChar == 'monster')
        {
            let monsterLife = monster.life = monster.life - this.calcDamage() 
            return monsterLife
        }
    }

    block(){

        if(this.classChar == 'warrior')
        {
            let blocked  = this.calcDamage() / 2
            return blocked
        }
        else if(this.classChar == 'monster')
        {
            let blocked  = this.calcDamage() / 2
            return blocked 
        }    
    }

    dodge(){
        if(this.classChar == 'warrior')
        {
            let dodge  = this.calcDamage() * 0 
            return dodge
        }   
        else if(this.classChar == 'monster')
        {
            let dodge  = this.calcDamage() * 0 
            return dodge
        } 
    }
}

let monster = new Character('monster', 100, 7)
let warrior = new Character('warrior', 100, 10)

console.log(monster.dodge())
console.log(warrior.dodge())