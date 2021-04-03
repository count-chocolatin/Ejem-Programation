import tkinter as tk
from tkinter import ttk

Interfas = tk.Tk()
Interfas.config(width=300, height=200)
Interfas.title("Manueletes")

apariencia= ttk.Style()
apariencia.configure("Peligro.TButton", foreground="#ff0000")
apariencia.configure("Kim.TButton", foreground="#0000FF")

#creacion de inputs
entrada1 = ttk.Entry(Interfas)
entrada2 = ttk.Entry(Interfas)

boton1 = ttk.Button(text="Aplicar", style="Peligro.TButton")
boton2 = ttk.Button(text="Pinchar", style="Kim.TButton")

texto = ttk.Label(text= "Programa iniciado") 

#ubicaion en la interface
entrada1.place(x=10, y=20)
entrada2.place(x=10, y=70)

boton1.place(x=190, y=18)
boton2.place(x=190, y=68)

texto.place(x=10, y=140)
#creando intrface
Interfas.mainloop()