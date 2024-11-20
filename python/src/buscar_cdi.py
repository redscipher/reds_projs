#importacoes
import requests
import json
import os
from datetime import datetime
from sys import argv

#== constantes
#taxa CDI do site bcb
URL: str = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4392/dados'

#variaveis
dados = list()

#funcoes
def buscarDados() -> bool:
    #declara que usaremos a variavel global
    global dados
    #variavel
    controle: bool = True
    #tratativa
    try:
        response = requests.get(URL)
        response.raise_for_status()
    except requests.HTTPError as excHTTP:
        print(f'ERRO HTTP: {excHTTP}')
        controle = False
    except Exception as exc:
        controle = False
        raise f'ERRO: {exc}'
    finally:
        #validacao se houve erro
        if controle:
            dados = json.loads(response.text)
        else:
            dados = list()
    # def retorno
    return controle

def validaCriarArquivo(arquivo: str) -> bool:
    #variavel retorno
    controle: bool = False
    #verifica se arquivo ja existe
    if (not os.path.exists(arquivo)) | (str(argv[2]) == '1'):
        #nao existe, entao cria
        with open(file=arquivo, mode='w', encoding='utf8') as fp:
            fp.write('data,taxa\n')
        #arquivo alterado
        controle = True
    # def retorno
    return controle

def gerarArquivo(arquivo: str):
    #valida criar arquivo
    if validaCriarArquivo(arquivo):
        #-----------------
        with open(file=arquivo, mode='a', encoding='utf8') as fp:
            #loop pelos itens dos dados
            for dado in dados:
                data = dado['data']
                taxa = dado['valor']
                #escreve linha
                fp.write(f'{data},{str(taxa)}\n')
        #exibe mensagem sucesso
        print('Arquivo gerado!')
        

#chamada funcao principal
def main():
    #variavel
    strArquivo: str
    #busca os dados do CDI
    buscarDados()
    #tratamento
    if len(argv) <= 1:
        argv.append('taxa_cdi')
        argv.append('0')
    #nome do arquivo
    strArquivo = f'./{argv[1]}.csv'
    #cria arquivo
    gerarArquivo(strArquivo)
    
# chamada
main()