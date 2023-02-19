import json

# Abrir o arquivo JSON e carregar os dados
with open('hungarycities.json') as file:
    data = json.load(file)

# Converter o valor da população em cada cidade de string para int
for city in data:
    city["population"] = int(city["population"])

for city in data:
    if 'description' not in city:
        city['description'] = ''


# Salvar o arquivo JSON atualizado
with open('dataset.json', 'w') as file:
    json.dump(data, file)
