class Character{
    constructor(classChar, life, strong){
        this.classChar = classChar
        this.life = life
        this.strong = strong
    }

    calcDamage(){
        if(this.classChar == 'warrior')
        {
            let damage = (this.strong * 40) / 100
            return damage;
        }
        else if(this.classChar == 'monster')
        {
            let damage = (this.strong * 40) / 100
            return damage;
        }
    }
    
    attack(opponent){
        let damage = this.calcDamage();
        opponent.life -= damage;
        return opponent.life;
    }

    block(opponent){
            let blocked = this.calcDamage() / 2;
            opponent.life = opponent.life - blocked
            return opponent.life;
        }    

    dodge(opponent){     
            let dodge  = this.calcDamage() * 0;
            opponent.life -= dodge
            return opponent.life;
    }
}

let monster = new Character('monster', 100, 10);
let warrior = new Character('warrior', 100, 10);

while(warrior.life >= 1 && monster.life >= 1)
{
    let randomNum = parseInt(Math.random() * 12)

    if(randomNum <= 2)
    {
        console.log('-----------------------------------------------')
        console.log('Warrior attack Monster')
        warrior.attack(monster)
        console.log(`Monster life: ${monster.life}`)
        console.log('-----------------------------------------------')
    }
    else if(randomNum <= 4)
    {
        console.log('-----------------------------------------------')
        console.log('Monster attack Warrior')
        monster.attack(warrior)
        console.log(`Warrior life: ${warrior.life}`)
        console.log('-----------------------------------------------')
    }
    else if(randomNum <= 6)
    {
        console.log('-----------------------------------------------')
        console.log('Warrior has blocked')
        monster.attack(warrior)
        console.log(`Warrior life ${warrior.life}`)
        console.log('-----------------------------------------------')
    }
    else if(randomNum <= 8)
    {
        console.log('-----------------------------------------------')
        console.log('Monster has blocked')
        warrior.attack(monster)
        console.log(`Monster life: ${monster.life}`)
        console.log('-----------------------------------------------')
    }
    else if(randomNum <= 10)
    {
        console.log('-----------------------------------------------')
        console.log('Warrior has dodge')
        monster.attack(warrior)
        console.log(`Warrior life ${warrior.life}`)
        console.log('-----------------------------------------------')
    }
    else if(randomNum <= 12)
    {
        console.log('-----------------------------------------------')
        console.log('Monster has dodge')
        warrior.attack(monster)
        console.log(`Monster life: ${monster.life}`)
        console.log('-----------------------------------------------')
    }
}

if(warrior.life <= 0)
{
    console.log('-----------------------------------------------')
    console.log('Monster win')
}
else if(monster.life <= 0)
{
    console.log('-----------------------------------------------')
    console.log('Warrior win')
}