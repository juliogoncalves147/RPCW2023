import json


def ordCidade(c):
    return c['nome']


def ordLigacao(l):
    return l['origem']


f = open("mapa.json")
data = json.load(f)

cidades = data['cidades']
cidades.sort(key=ordCidade)

ligacoes = data['ligações']
ligacoes.sort(key=ordLigacao)

getNome = {c['id']: c['nome'] for c in cidades}

output = open("output.html", "w+")

webpage = """
<!DOCTYPE html>
<html>
    <head>
        <title>Mapa Virtual</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        <h1>Mapa Virtual</h1>
        <table>
            <tr>
                <td width="30%" valign="top">
                    <h3>Índice</h3>
                    <a name="indice"/>
                    <!-- Lista com o índice -->
                    <ul>
"""

for elem in cidades:
    webpage += f'<li><a href="#{elem["id"]}">{elem["nome"]}</a>\n</li>\n'

webpage += "</td><td width=\"80%\">"

for elem in cidades:
    webpage += f'<a name="{elem["id"]}"/>\n'
    webpage += f'<h3>{elem["nome"]}</h3>\n'
    webpage += f'<p><b>População</b>: {elem["população"]}</p>\n'
    webpage += f'<p><b>Distrito</b>: {elem["distrito"]}</p>\n'
    webpage += f'<p><b>Descrição</b>: {elem["descrição"]}</p>\n'
    webpage += f'<p><b>Ligações</b>:<ul>\n'
    for ligacao in ligacoes:
        if ligacao['origem'] == elem['id']:
            webpage += f'<li><a href="#{ligacao["destino"]}">{getNome[ligacao["destino"]]}</a> -> {ligacao["distância"]}</li>\n'
        if ligacao['destino'] == elem['id']:
            webpage += f'<li><a href="#{ligacao["origem"]}">{getNome[ligacao["origem"]]}</a> -> {ligacao["distância"]}</li>\n'
    webpage += f'</ul></p>\n'
    webpage += f'<p>'
    webpage += f'<address>[<a href="#indice"> Voltar para o Índice]</address>\n'
    webpage += f'<center><hr width="80%"/></center>\n'

webpage += """ < /td >
            < / tr >
        < / table >
    < / body >
< / html >
"""

output.write(webpage)
