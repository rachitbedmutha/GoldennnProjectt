class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Endless Car Running Game")
        title.position(displayWidth/2-50,10);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            name = this.input.value();
           // this.greeting.html("Hello "+name+" Choose Your Car ");
            gameState = 1;


        })
    }
    
}