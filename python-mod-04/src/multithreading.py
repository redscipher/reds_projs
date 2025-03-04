#importacoes
import requests
import time
import csv
import random
import concurrent.futures
from bs4 import BeautifulSoup       #biblioteca p/ simular um navegador

#region: variaveis
#cabecalhos globais p/ ser usuado nas requisicoes
cabecalhos = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'}
#inteiros
MAX_THREADS = 30
#
#endregion

#region: metodos
#principal
def main():
    #variaveis: nulas
    resposta = None
    #frases (strings)
    str_filmes: str
    #inteiros
    tempo_inicial: float; tempo_final: float
    
    #inicia temporizador
    tempo_inicial = time.time()
    #filmes mais populares do IMDB: url
    str_filmes = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm'
    
    #executa uma requisicao a url dos filmes
    resposta = requests.get(str_filmes, headers=cabecalhos)
    #simula o navagedor p/ 'navegar' pelo resultado
    bsResultado = BeautifulSoup(resposta.content, 'html.parser')

    #funcao p/ extrair os filmes da url passada
    extrai_filmes(bsResultado)

    #finalizacao do temporizador
    tempo_final = time.time()
    print('Tempo execução: ', tempo_final - tempo_inicial)
    
def extrai_filmes(sopa):
    #busca por uma div, com um atribuito 'data-testid', e retorna uma lista 'ul'
    tabela_filmes = sopa.find('div', attrs={'data-testid': 'chart-layout-main-column'}).find('ul')
    #retorna os itens 'li'
    linhas_tabela = tabela_filmes.find_all('li')
    
    #lista links dos filmes: tag 'a' atributo 'href'
    links = ['https://imdb.com' + filme.find('a')['href'] for filme in linhas_tabela]

    #define as threads p/ executar
    threads = min(MAX_THREADS, len(links))
    #cria concorrente p/ execucao de multithreads
    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        executor.map(extrai_detalhes_filme, links)

def extrai_detalhes_filme(link):
    #variaveis: nulas
    resposta = None
    #espera
    time.sleep(random.uniform(0, 0.2))
    #executa requisicao
    resposta = requests.get(link, headers=cabecalhos)
    filme_sopa = BeautifulSoup(resposta.content, 'html.parser')     #simula o navagedor p/ 'navegar' pelo resultado

    #validacao
    if filme_sopa is not None:
        #resete variaveis
        titulo = None
        data = None
        
        #encontrando a sessao especiffica
        sessao_tag = filme_sopa.find('section', attrs={'class': 'ipc-page-section'})
        #validacao
        if sessao_tag is not None:
            #encontrando todas as divs dentro da sessao
            divs = sessao_tag.find_all('div', recursive=False)
            #validacao
            if len(divs) > 1:
                div_tag = divs[1]
                
                #encontrando o titulo do filme
                h1_tag = div_tag.find('h1')
                if h1_tag:
                    titulo = h1_tag.find('span').get_text()
                
                #encontrando a data de lançamento
                data_tag = div_tag.find('a', href=lambda href: href and 'releaseinfo' in href)
                if data_tag:
                    data = data_tag.get_text().strip()
                
                #encontrando a classificacao do filme
                classe_tag = filme_sopa.find('div', attrs={'data-testid': 'hero-rating-bar__aggregate-rating__score'})
                nota = classe_tag.get_text() if classe_tag else None
                
                #encontrando a sinopse do filme
                plot_tag = filme_sopa.find('span', attrs={'data-testid': 'plot-xs_to_m'})
                plot_texto = plot_tag.get_text().strip() if plot_tag else None
                
                #comeca escrita de arquivo
                with open('movies.csv', mode='a', newline='', encoding='utf-8') as arq:
                    #cria o escritor
                    escritor = csv.writer(arq, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
                    #validacao
                    if all([titulo, data, nota, plot_texto]):
                        #efetua escrita
                        print(titulo, data, nota, plot_texto)
                        escritor.writerow([titulo, data, nota, plot_texto])
#endregion

#inicializacao principal do app python pull ramo pessoal
if __name__ == '__main__':
    main()
