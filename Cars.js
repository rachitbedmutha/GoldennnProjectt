class Cars {
    constructor() {
        this.image1 = loadImage("images/yellowCar.jpg");
        this.image2 = loadImage("images/redCar.jpg");
        this.image3 = loadImage("images/blackCar.jpg");
    }
    display() {
        console.log("11111111111");

        car1 = createSprite(100,200,50,50);
        car1.addImage("car1",this.image1);

         car2 = createSprite(400,200,50,50);
        car2.addImage("car2",this.image2);
         car3 = createSprite(800,200,50,50);
        car3.addImage("car3",this.image3);
        if(mousePressedOver(car1)){
            carCode = 1;
            gameState = 2;
            
            console.log(carCode);
        
        }
        if(mousePressedOver(car2)){
            carCode = 2;
            gameState = 2;
            console.log(carCode);
            
        }
        if(mousePressedOver(car3)){
            carCode = 3;
            gameState = 2;
            console.log(carCode);
            
        }
          //console.log(carCode);
          drawSprites();
    }
}