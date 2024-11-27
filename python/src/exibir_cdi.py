#== importacoes
from sys import argv
import seaborn as sns
import pandas as pd

#variaveis
dfOriginal: pd.DataFrame

#funcoes
def lerArquivo(arquivo: str):
    # efetua leitura do arquivo csv e retorna um 'dataframe'
    global dfOriginal
    dfOriginal = pd.read_csv(arquivo)

def gerarImagem():
    grafico = sns.lineplot(x=dfOriginal['data'], y=dfOriginal['taxa'], hue='variable', data=pd.melt(dfOriginal, ['data']))
    grafico.get_figure().savefig(f'{argv[1]}.png')
    #exibe mensagem
    print('Imagem gerada!')

# funcao principal
def main():
    #tratamento
    if len(argv) <= 1:
        argv.append('taxa_cdi')
        argv.append('0')
    #efetua leitura do arquivo
    lerArquivo(f'{argv[1]}.csv')
    #cria imagem
    gerarImagem()
    
    
# validaca p/ chamar funcao caso execucao direta
if __name__ == '__main__':
    main()