from bs4 import BeautifulSoup, UnicodeDammit

"""
# Carrega o documento HTML
with open('dataset.xml', 'r') as f:
    documento = f.read()

converter = UnicodeDammit(documento, is_html=False)
xml_unicode = converter.unicode_markup
# Cria um objeto BeautifulSoup
soup = BeautifulSoup(xml_unicode, 'lxml')

# Encontra todas as seções div
secoes = soup.find_all('ARQELEM')

# Salva cada seção em um arquivo XTML separado
for i, secao in enumerate(secoes):
    with open(f'Paginas_XML/pagina_{i}.xml', 'w') as f:
        f.write(str(secao))
"""


# Lê o arquivo XML
with open('dataset.xml', 'r', encoding='utf-8') as arquivo:
    xml = arquivo.read()

# Instancia a classe UnicodeDammit e converte o conteúdo do arquivo para Unicode
converter = UnicodeDammit(xml, is_html=False)
xml_unicode = converter.unicode_markup

# Analisa o XML usando o Beautiful Soup
soup = BeautifulSoup(xml_unicode, 'xml')

secoes = soup.find_all('ARQELEM')

# Salva cada seção em um arquivo XTML separado
for i, secao in enumerate(secoes):
    with open(f'Paginas_XML/pagina_{i}.xml', 'w') as f:
        f.write(str(secao))
# Agora você pode trabalhar com o conteúdo do XML de forma correta
