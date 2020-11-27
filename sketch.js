const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var lI;
var bman,drop,l;

var lGroup, dGroup;

function preload(){

    lI1 = loadImage("images/thunderbolt/1.png");
    lI2 = loadImage("images/thunderbolt/2.png");
    lI3 = loadImage("images/thunderbolt/3.png");
    lI4 = loadImage("images/thunderbolt/4.png");
}

function setup(){

    createCanvas(400,600);

    engine = Engine.create();
    world = engine.world;

    bman = new Bman(200,470,300,300);
    // drop = new Drop(random(1,399), 0, 10);

    lGroup = new Group();
    
}

function draw(){
    background("black");

    Engine.update(engine);

    lightn();
    drops();

    drop.display();

    bman.display();

}

function lightn(){

    if (frameCount % 35 === 0) {
        l = createSprite(random(100, 1000), 0, 100, 100);

        var rand = Math.round(random(1, 4));
        switch (rand) {
            case 1: l.addImage("l1", lI1);
                break;
            case 2: l.addImage("l2", lI2);
                break;
            case 3: l.addImage("l3", lI3);
                break;
            case 4: l.addImage("l4", lI4);
                break;

        }
        lGroup.add(l);

    }
}

function drops(){
    if (frameCount % 5 === 0) {
        drop = new Drop(random(1,399), 0, 10)
    }
}

