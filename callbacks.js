function funcionPrincipal(callback){
    console.log("hago algo y llamo al callback avisando que terminé")
    callback();
   }
    
   funcionPrincipal(function(){
    console.log("terminó de hacer algo");
   });