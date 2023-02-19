import json

file = open("dataset.json", "r")

cities = sorted(json.load(file), key=lambda elem: elem["population"])

cities = cities[::-1]

cities = cities[:10]

output = open("hungary.html", "w+")

webpage = """<!DOCTYPE html>
<html>
    <head>
        <title>Hungria</title>
        <meta charset="utf-8"/>
    </head>
    <body style="background-color:powderblue;">
        <h1>Hungria</h1>
        <p>Nesta página, poderás encontrar informações sobre as 10 cidades mais populosas da Hungria, ordenadas por ordem descendente!</p>
        <table>
            <tr>
                <td witdh="30%" valign="top">
                    <h3><a name="indice"/>Índice</h3>
                    <ul>
"""

for elem in cities:
    webpage += f'<li><a href="#{elem["city"]}">{elem["city"]}</a>\n</li>\n'

webpage += "</td><td width=\"80%\">"

for elem in cities:
    webpage += f'<a name="{elem["city"]}"/>\n'
    webpage += f'<h2>{elem["city"]}</h3>\n'
    webpage += f'<p><b>População</b>: {elem["population"]}</p>\n'
    webpage += f'<p><b>Descrição</b>: {elem["description"]}</p>\n'
    # webpage += f'<p><b>Distrito</b>: {elem["lng"]}</p>\n'
    # webpage += f'<p><b>Descrição</b>: {elem["country"]}</p>\n'
    if elem["city"] == "Budapest":
        webpage += f'<img src="https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2020/02/budapeste.jpg?fit=1360%2C907&ssl=1" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Debrecen":
        webpage += f'<img src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/debrecen_0.jpg" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Szeged":
        webpage += f'<img src="https://alifewithoutborders.org/wp-content/uploads/2020/06/things-to-do-in-szeged.jpg" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Miskolc":
        webpage += f'<img src="https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1605563034822-SUC8T9J38HZVFHB5V8YI/The_Common_Wanderer_-57.jpg?format=1000w" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Pécs":
        webpage += f'<img src="https://international.pte.hu/sites/international.pte.hu/files/share/INTERNATIONAL/university/P%C3%A9cs_k%C3%A9p_Kisfali_Gergely.jpg" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Győr":
        webpage += f'<img src="https://bohemiantraveler.com/wp-content/uploads/2014/08/Gyor-4202.jpg" alt="{elem["city"]}" width="300" height="200">\n'
    elif elem["city"] == "Nyíregyháza":
        webpage += f'<img src="https://tervlap.hu/common/uploads/watermarks/nyirdrontervlap1-62d00489b1-a620ed0c75891869753c8ada907f10d4.jpg" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Kecskemét":
        webpage += f'<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9f/43/96/kossuth-square.jpg?w=1200&h=-1&s=1" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Székesfehérvár":
        webpage += f'<img src="https://milimundo.com/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-15-at-13.20.58.jpeg" alt="{elem["city"]}" width="500" height="300">\n'
    elif elem["city"] == "Szombathely":
        webpage += f'<img src="https://img.itinari.com/activity/images/original/1255488a-3372-4a6e-b628-952279aeb77f-szombathely1.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=13c77421871cd274c4e49b13c350c425" alt="{elem["city"]}" width="500" height="300">\n'
        # webpage += '<address>[<a href="#indice"> Voltar para o Índice]</address>\n'
    webpage += f'<center><hr width="80%"/></center>\n'

webpage += """</td>
            </tr>
        </table>
    </body>
</html>
"""

output.write(webpage)
