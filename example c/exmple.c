#include <stdio.h>
#include <stdlib.h>
void hola();
int suma();

int main (){
         
         
         system("Pause");
         hola();
         
         printf(" tu resultado es %d",suma(43, 34));
         return 0;
}

void hola(){
         printf("Hello my friends,\n");

}
int suma(int a ,int b ){
      int suma;
      suma = a + b;
      return suma;
}