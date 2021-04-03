class Humano(): 
    def __init__(self, edad, nombre, ocupacion):
        self.edad = edad 
        self.nombre = nombre
        self.ocupacion = ocupacion 
        
      
    def suma(self):
        presentacion = self.edad + self.nombre + self.ocupacion
        print(presentacion )
    
    def resta(self):
         resultado = self.edad - self.nombre
         print(resultado)

mymct = Humano(2, 67,6).resta()
