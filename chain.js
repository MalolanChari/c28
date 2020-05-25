class Chain{
    constructor(bodyA,bodyB){
        var option={
            'bodyA' : bodyA,
            'bodyB' : bodyB,
            'length' : 10,
            'stiffness' : 0.08
        
        }
    
        this.chain=Matter.Constraint.create(option)


        World.add(world,this.chain)

     
    }

    display(){
        strokeWeight(5)
        stroke("grey");
        line( this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,
            this.chain.bodyB.position.y)
    }
}