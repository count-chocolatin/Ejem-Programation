s = document.getElementById('segundos')
m = document.getElementById('minutos')
h = document.getElementById('hora')

contador_s=0
contador_m=0  
contador_h=0    

setInterval(function () {
                           
         if(contador_s==60){
                   contador_s=0
                   contador_m++
                   m.innerHTML = contador_m
                   if (contador_m==59){
                             contador_m=-1
                             contador_h= contador_h+1
                             h.innerHTML= contador_h
                             if(contador_h==0){
                                      contador_h=0
                             }
                           }
         }
         s.innerHTML = contador_s
         contador_s= contador_s+1
},1000)

   

