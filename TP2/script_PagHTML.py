import xml.etree.ElementTree as ET

# Lê o arquivo XML

for i in range(0, 122):
    tree = ET.parse(f'Paginas_XML/pagina_{i}.xml')
    root = tree.getroot()

    # Cria o arquivo HTML
    with open(f'Paginas_HTML/pagina_{i}.html', 'w') as f:

        # Escreve o cabeçalho do arquivo HTML
        if root.find('IDENTI') is not None:
            f.write('<html>\n<head>\n<title>' + str(root.find('IDENTI').text) + '</title>\n</head>\n<body>\n')

        # Escreve o conteúdo do arquivo HTML
        if root.find('TIPO') is not None:
            f.write('<h1>' + str(root.find('IDENTI').text) + '</h1>\n')
            
        if root.find('TIPO').get('Assunto') is not None:
            f.write('<p><strong>Tipo:</strong> ' + str(root.find('TIPO').get('ASSUNTO')) + '</p>\n')
            
        if root.find('DESCRI/LIGA') is not None:
            f.write('<p><strong>Descrição:</strong> ' + str(root.find('DESCRI/LIGA').text) + '</p>\n')
            
        if root.find('CRONO') is not None:
            f.write('<p><strong>Cronologia:</strong> ' + str(root.find('CRONO').text) + '</p>\n')
            
        if root.find('LUGAR') is not None:
            f.write('<p><strong>Lugar:</strong> ' + str(root.find('LUGAR').text) + '</p>\n')
            
        if root.find('FREGUE') is not None:
            f.write('<p><strong>Freguesia:</strong> ' + str(root.find('FREGUE').text) + '</p>\n')
            
        if root.find('CONCEL') is not None:
            f.write('<p><strong>Concelho:</strong> ' + str(root.find('CONCEL').text) + '</p>\n')
            
        if root.find('CODADM') is not None:
            f.write('<p><strong>Código ADM:</strong> ' + str(root.find('CODADM').text) + '</p>\n')
            
        if root.find('LATITU') is not None:
            f.write('<p><strong>Latitude:</strong> ' + str(root.find('LATITU').text) + '</p>\n')
            
        if root.find('LONGIT') is not None:
            f.write('<p><strong>Longitude:</strong> ' + str(root.find('LONGIT').text) + '</p>\n')
            
        if root.find('ALTITU') is not None:
            f.write('<p><strong>Altitude:</strong> ' + str(root.find('ALTITU').text) + '</p>\n')
            
        if root.find('ACESSO') is not None:
            f.write('<p><strong>Acesso:</strong> ' + str(root.find('ACESSO').text) + '</p>\n')
            
        if root.find('QUADRO') is not None:
            f.write('<p><strong>Quadro:</strong> ' + str(root.find('QUADRO').text) + '</p>\n')
            
        if root.find('TRAARQ') is not None:
            f.write('<p><strong>Trabalhos arqueológicos:</strong> ' + str(root.find('TRAARQ').text) + '</p>\n')
            
        if root.find('DESARQ') is not None:
            f.write('<p><strong>Descrição arqueológica:</strong> ' + str(root.find('DESARQ').text) + '</p>\n')
            
        if root.find('INTERP') is not None:
            f.write('<p><strong>Interpretação:</strong> ' + str(root.find('INTERP').text) + '</p>\n')
            
        if root.find('DEPOSI') is not None:
            f.write('<p><strong>Depósito:</strong> ' + str(root.find('DEPOSI').text) + '</p>\n')
            
        if root.find('INTERE') is not None:
            f.write('<p><strong>Interesse:</strong> ' + str(root.find('INTERE').text) + '</p>\n')
        
        f.write('<p><strong>Bibliografia:</strong></p>\n')
        
        f.write('<ul>\n')
        
        if root.find('BIBLIO') is not None:
            for biblio in root.findall('BIBLIO'):
                f.write('<li>' + biblio.text + '</li>\n')
        
        f.write('</ul>\n')
        
        if root.find('AUTOR') is not None:
            f.write('<p><strong>Autor:</strong> ' + str(root.find('AUTOR').text) + '</p>\n')
            
        if root.find('DATA') is not None:
            f.write('<p><strong>Data:</strong> ' + str(root.find('DATA').text) + '</p>\n')
        
