class Form {
  constructor() {
    this.input = createInput("email");
    this.button = createButton('start');
    this.Cbutton = createButton('continue');
    this.Ybutton = createButton('Yes');
    this.Nbutton = createButton('No');
    this.Y1button = createButton('Yes');
    this.N1button = createButton('No');
    this.h5 = createButton('fiveHundred');
    this.h1 = createButton('oneHundred');
    this.k1 = createButton('oneThousand');
    this.m = createButton('more');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.Q1 = createElement('h2');
    this.Q2 = createElement('h2');
    this.Q3 = createElement('h2');
    this.ty = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.Cbutton.hide();
    this.Q1.hide();
    this.Q2.hide();
    this.Q3.hide();
    this.Ybutton.hide();
    this.Nbutton.hide();
    this.Y1button.hide();
    this.N1button.hide();
    this.k1.hide();
    this.h1.hide();
    this.h5.hide();
    this.ty.hide();
  }
  getAnswersAtEnd(){
       database.ref('AnswersAtEnd').on("value",(data)=>{
         this.answer=data.val();
       });
     }
  display(){
    this.title.html("survey to bring about a change");
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.input = this.input.value();     
      this.greeting.html("Hello " + this.input);
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.Cbutton.position(displayWidth/2,displayHeight/2);

   
  this.Cbutton.mousePressed(()=>{
      this.greeting.hide();
      this.Cbutton.hide();
      this.Q1.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
      this.Q1.position(displayWidth/2-30,displayHeight/2-80);
      this.Ybutton.position(displayWidth/2-30,displayHeight/2+10);
      this.Nbutton.position(displayWidth/2-30,displayHeight/2+30);



  this.Ybutton.mousePressed(()=>{
    this.Nbutton.hide();
    this.Ybutton.hide();
    this.Q1.hide();
    this.Q2.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
    this.Q2.position(displayWidth/2-30,displayHeight/2-80);
    this.Y1button.position(displayWidth/2-30,displayHeight/2+10);
    this.N1button.position(displayWidth/2-30,displayHeight/2+30);
this.N1button.mousePressed(()=>{
      this.Y1button.hide();
      this.N1button.hide();
      this.Q2.hide();
      this.Q3.html("Q3. How much per month would you be willing to pay?");
      this.Q3.position(displayWidth/2-30,displayHeight/2-50);
      this.h1.position(displayWidth/2-30,displayHeight/2+10);
      this.h5.position(displayWidth/2-30,displayHeight/2+30);
      this.k1.position(displayWidth/2-30,displayHeight/2+50);
      this.m.position(displayWidth/2-30,displayHeight/2+70);
 this.h1.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

        })
 this.h5.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

 })
 this.k1.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

 })
 this.m.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

 })
    })
    this.Y1button.mousePressed(()=>{
      this.Y1button.hide();
      this.N1button.hide();
      this.Q2.hide();
      this.Q3.html("Q3. How much per month would you be willing to pay?");
      this.Q3.position(displayWidth/2-30,displayHeight/2-50);
      this.h1.position(displayWidth/2-30,displayHeight/2+10);
      this.h5.position(displayWidth/2-30,displayHeight/2+30);
      this.k1.position(displayWidth/2-30,displayHeight/2+50);
      this.m.position(displayWidth/2-30,displayHeight/2+70);
this.h1.mousePressed(()=>{
      this.h1.hide();
      this.h5.hide();
      this.k1.hide();
      this.m.hide();
      this.Q3.hide();
      this.ty.html("Thank You");
      this.ty.position(displayWidth/2,displayHeight/2);

      })
this.h5.mousePressed(()=>{
      this.h1.hide();
      this.h5.hide();
      this.k1.hide();
      this.m.hide();
      this.Q3.hide();
      this.ty.html("Thank You");
      this.ty.position(displayWidth/2,displayHeight/2);

})
this.k1.mousePressed(()=>{
      this.h1.hide();
      this.h5.hide();
      this.k1.hide();
      this.m.hide();
      this.Q3.hide();
      this.ty.html("Thank You");
      this.ty.position(displayWidth/2,displayHeight/2);

})
this.m.mousePressed(()=>{
      this.h1.hide();
      this.h5.hide();
      this.k1.hide();
      this.m.hide();
      this.Q3.hide();
      this.ty.html("Thank You");
      this.ty.position(displayWidth/2,displayHeight/2);

})
  })
    })
    this.Nbutton.mousePressed(()=>{
      this.Nbutton.hide();
      this.Ybutton.hide();
      this.Q1.hide();
      this.Q2.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
      this.Q2.position(displayWidth/2-30,displayHeight/2-80);
      this.Y1button.position(displayWidth/2-30,displayHeight/2+10);
      this.N1button.position(displayWidth/2-30,displayHeight/2+30);
 this.N1button.mousePressed(()=>{
        this.Y1button.hide();
        this.N1button.hide();
        this.Q2.hide();
        this.Q3.html("Q3. How much per month would you be willing to pay?");
        this.Q3.position(displayWidth/2-30,displayHeight/2-50);
        this.h1.position(displayWidth/2-30,displayHeight/2+10);
        this.h5.position(displayWidth/2-30,displayHeight/2+30);
        this.k1.position(displayWidth/2-30,displayHeight/2+50);
        this.m.position(displayWidth/2-30,displayHeight/2+70);
    
  this.h1.mousePressed(()=>{
          this.h1.hide();
          this.h5.hide();
          this.k1.hide();
          this.m.hide();
          this.Q3.hide();
          this.ty.html("Thank You");
          this.ty.position(displayWidth/2,displayHeight/2);

          })
   this.h5.mousePressed(()=>{
          this.h1.hide();
          this.h5.hide();
          this.k1.hide();
          this.m.hide();
          this.Q3.hide();
          this.ty.html("Thank You");
          this.ty.position(displayWidth/2,displayHeight/2);

   })
   this.k1.mousePressed(()=>{
          this.h1.hide();
          this.h5.hide();
          this.k1.hide();
          this.m.hide();
          this.Q3.hide();
          this.ty.html("Thank You");
          this.ty.position(displayWidth/2,displayHeight/2);

   })
   this.m.mousePressed(()=>{
          this.h1.hide();
          this.h5.hide();
          this.k1.hide();
          this.m.hide();
          this.Q3.hide();
          this.ty.html("Thank You");
          this.ty.position(displayWidth/2,displayHeight/2);

   })
      })
 this.Y1button.mousePressed(()=>{
        this.Y1button.hide();
        this.N1button.hide();
        this.Q2.hide();
        this.Q3.html("Q3. How much per month would you be willing to pay?");
        this.Q3.position(displayWidth/2-30,displayHeight/2-50);
        this.h1.position(displayWidth/2-30,displayHeight/2+10);
        this.h5.position(displayWidth/2-30,displayHeight/2+30);
        this.k1.position(displayWidth/2-30,displayHeight/2+50);
        this.m.position(displayWidth/2-30,displayHeight/2+70);
 this.h1.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

        })
 this.h5.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

 })
 this.k1.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

 })
 this.m.mousePressed(()=>{
        this.h1.hide();
        this.h5.hide();
        this.k1.hide();
        this.m.hide();
        this.Q3.hide();
        this.ty.html("Thank You");
        this.ty.position(displayWidth/2,displayHeight/2);

 })
        })
       

      });
    })
  });
 
  }
  
}


