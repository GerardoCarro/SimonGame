$('h3').text('START');
$('.startRC').click(async function () { 
   
    let level = [];
    let userClicked = [];
    let key;
    let buttonClicked = $('.part').click(function (e) { 
    //   console.log(e.target.id);
        let num = e.target.id;
        buttonClicked = Number(num);
        
    });
    
    function newLevel(){
        level.push(Math.floor(Math.random() * 4 + 1))
        console.log(level)
    }
    
    newLevel()
    disappearAppear();

    $('#1').click(function () { 
        $('#1').addClass('toggleColor');
    
        var audio = new Audio("./sounds/sound1.mp3");
        audio.play();
        setTimeout(function(){
        $('#1').removeClass('toggleColor');
        },80)
        
    });
    $('#2').click(function () { 
        $('#2').addClass('toggleColor');
        var audio = new Audio("./sounds/sound2.mp3");
        audio.play();
        setTimeout(function(){
        $('#2').removeClass('toggleColor');
        },80)
    });
    $('#3').click(function () { 
        $('#3').addClass('toggleColor');
        var audio = new Audio("./sounds/sound3.mp3");
        audio.play();
        setTimeout(function(){
        $('#3').removeClass('toggleColor');
        },80)
    });
    $('#4').click(function () { 
        $('#4').addClass('toggleColor');
        var audio = new Audio("./sounds/sound4.mp3");
        audio.play();
        setTimeout(function(){
        $('#4').removeClass('toggleColor');
        },80)
    });


    function disappearAppear(){
    $('#'+ level[level.length - 1]).addClass('displayNone');
    var audio = new Audio("./sounds/sound" + level[level.length - 1] + ".mp3");
        audio.play();
        console.log(audio)
    setTimeout(function(){
       $('.part').removeClass('displayNone');
    }, 200)
    }
    
    function patter(){
        for(let i = 0; i <= level.length; i++){
          
        }
    }

    $('.part').click(async function (e) { 
        function patterUser(){
            userClicked.push(Number(e.target.id))
         }
         patterUser()
       
        for(let i = 0; i < userClicked.length; i++){
            if(userClicked[i] == level[i]){
                key = true; 
                console.log(userClicked[i] + '' + level[i])
                console.log('ss')
             } else {
                 key = false;
             }
        }
            
        
        console.log(key)
        
        console.log(userClicked.length + ' ' + level.length)
                if(key == false){
                // alert('YOU LOSE!');
                // level = [];
                // newLevel();
                // disappearAppear();
                // console.log(level)
                $('body').addClass('redScreen');
                setTimeout(function(){
                    $('body').removeClass('redScreen')
                },1000)

                
                return location.reload();
               }
               if(userClicked.length == level.length){
                if(key == true){
                    newLevel();
                    userClicked = []
                    console.log(userClicked)
                    $('#levelcount').text('Level ' + '\n' +(level.length));
                    await sleep(1.5);
                    async function sleep(seconds){
                        return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
                       }
                    disappearAppear();

                   }      
               }

    });
   
    // $('.part').click(async function (e) { 
    //     function patterUser(){
    //        userClicked.push(Number(e.target.id))
    //        console.log(userClicked)
    //     }
    //     patterUser()
       
    //     console.log(patter())
    //         if(key == false){
    //             // alert('YOU LOSE!');
    //             // level = [];
    //             // newLevel();
    //             // disappearAppear();
    //             // console.log(level)
                
    //             return location.reload();
    //            }
    //             else if(key == true){
    //             newLevel();
    //             userClicked = [];
    //             $('#levelcount').text('Level ' + '\n' +(level.length));
    //             await sleep(1.5);
    //             async function sleep(seconds){
    //                 return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
    //                }
    //             disappearAppear();
    //            }      
    // });

    $('#levelcount').text('Level ' + '\n' +(level.length));
    $('.startRC').unbind('click');
});
    

    
    

