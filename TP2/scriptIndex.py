import os
import xml.etree.ElementTree as ET

# Diretório onde os arquivos XML estão armazenados
xml_dir = "Paginas/"

# Lista onde os títulos serão armazenados
dicionario = {}

a = 0
# Loop através de cada arquivo XML no diretório
for i in range(0, 122):
        file_path = xml_dir + "pagina_" + str(i) + ".xml"
        # Faz a leitura do arquivo XML e carrega o conteúdo em um objeto ElementTree
        tree = ET.parse(file_path)

        # Encontra o elemento que contém o título e adiciona à lista de títulos
        titulo_elem = tree.find(".//IDENTI")
        if titulo_elem is not None:
            dicionario[titulo_elem.text] = i

#Temos um dicionário com os títulos e os caminhos dos arquivos XML. 

#Buscar o Nome da Cidade



output = open("index.html", "w+")

webpage = """
<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Arqueosítios</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Mapa Arqueosítios</h1>
        <table>
            <tr>
                <td width="30%" valign="top">
                    <h3>Índice</h3>
                    <a name="Indice"/>
                    <!-- Lista com o índice -->
                    <ul>
"""


for titulo, file_path in dicionario.items():
    webpage += f'<li><a href="{file_path}">{titulo}</a></li>\n'

webpage += "</ul></td>"
webpage += "</tr>"
webpage += "</table>"
webpage += "</body>"
webpage += "</html>"



output.write(webpage)
