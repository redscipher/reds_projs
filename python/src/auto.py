#importacao
import subprocess

#funcoes
def main():
    # executa comando 1
    resultado = subprocess.run(['python', './buscar_cdi.py' , 'taxa_cdi', '1'], capture_output=True, text=True)
    print(resultado.stdout)
    # executa comando 2
    resultado2 = subprocess.run(['python', './exibir_cdi.py',  'taxa_cdi'], capture_output=True, text=True)
    print(resultado2.stdout)

#chamada funcao
main()