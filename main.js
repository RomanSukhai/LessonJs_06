function Robot() {
    let self =this
    let messeg = "Я Robot – я просто працюю"

    
    self.work = function () {
        console.log(messeg);
    }
    self.setWork = function (newMesseg) {
        let messegLength =messeg.length;
        let newMessegLenght = newMesseg.length;
        if (newMessegLenght>messegLength) {
            throw new Error("New Messeg must be smaller tham old messeg")
        }else{
         messeg = newMesseg
        }
    }
}

function CoffeRobot () {
    let self =this
    let messeg ="Я CoffeRobot – я варю каву"


    Robot.apply(this);
    self.work =function () {
       console.log(messeg);
   }
    self.setWork = function (newMesseg) {
        let messegLength =messeg.length;
        let newMessegLenght = newMesseg.length;
        if (newMessegLenght>messegLength) {
            throw new Error("New Messeg must be smaller tham old messeg")
        }else{
     messeg = newMesseg
    }
}
}

function RobotDancer () {
    let self =this
    let messeg = "Я RobotDancer – я просто танцюю"


    Robot.apply(this);
    self.work =function () {
       console.log(messeg);
   }

   self.setWork = function (newMesseg) {
        let messegLength =messeg.length;
        let newMessegLenght = newMesseg.length;
        if (newMessegLenght>messegLength) {
            throw new Error("New Messeg must be smaller tham old messeg")
        }else{
        messeg = newMesseg
       }
   }
}

function RobotCoocker () {
    let self =this
    let messeg ="Я RobotCoocker – я просто готую"


    Robot.apply(this);
    self.work =function () {
       console.log(messeg);
   }
   
   self.setWork = function (newMesseg) {
    let messegLength =messeg.length;
    let newMessegLenght = newMesseg.length;
    if (newMessegLenght>messegLength) {
        throw new Error("New Messeg must be smaller tham old messeg")
    }else{
        messeg = newMesseg
       }
   }
}

let robots = [
    new Robot(),
    new CoffeRobot(),
    new RobotDancer(),
    new RobotCoocker()
            ]
robots[0].work();
robots[1].work();
robots[2].work();
robots[3].work();
console.log(); 
for (let i = 0; i < robots.length; i++) {
        robots[i].work()
    }

