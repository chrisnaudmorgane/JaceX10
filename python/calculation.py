import re

entree = input("Entrez deux nombres :")
a, o, b = re.findall(r'\d+|\D+', entree)
r = 0

if not a.isnumeric() or not b.isnumeric():
  print("Erreur : les deux entiers doivent être des nombres entiers")
else:
  a = int(a)
  b = int(b)

  match o:
    case '+':
      r = a + b
    case '-':
      r = a - b
    case '*':
      r = a * b
    case '/':
      if b != 0:
        r = a / b
      else:
        print("Erreur : division par zéro")
    case _:
      print("Opérateur non valide")

print("Le résultat est :", r)
