import forgive # JSON Database system
import markdown, pygments, micawber # Rendering html
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
import os, colorama, time, itertools
colorama.init()
print(colorama.Fore.MAGENTA)

providers = micawber.bootstrap_basic()
formatter = HtmlFormatter()
db = forgive.ForgiveDB('list.json')

# Util Functions

def lexify(lang, code):
    lex = get_lexer_by_name(lang)
    return pygments.highlight(code, lex, formatter)

def new_entry():
    # Time
    t = int(time.time())
    lt = time.localtime()
    date = [lt.tm_year, lt.tm_mon, lt.tm_mday, lt.tm_hour, lt.tm_min, lt.tm_sec]
    print("Registered time:", date)

    # Info
    id_ = count + 1
    print("ID:", id_)
    title = input("Title: ")
    tags = input("Tags: ").lower().split(" ")
    print("Listed tags:",tags)
    entry = input("Entry file: ")
    input("Opening file entrys/%s.md to edit. (Press enter)" % entry)
    print(colorama.Style.RESET_ALL)
    os.system("vim entrys\\%s.md" % entry)
    print(colorama.Fore.MAGENTA)

    # Rendering the entry
    with open("entrys/%s.md" % entry, "r") as f:
        content = markdown.markdown(f.read())
        content = micawber.parse_html(content, providers)

    # Rendering the code tags
    from bs4 import BeautifulSoup as bs
    soup = bs(content, 'html.parser')
    for el in soup.find_all('pre'):
        print(colorama.Fore.LIGHTCYAN_EX)
        print(el.code.string)
        print(colorama.Fore.MAGENTA)
        lang = input('language of this snippet: ')
        hl = lexify(lang, el.code.string)
        el.replaceWith(bs(hl, 'html.parser'))

    content = soup.decode()
    with open("entrys/%s.html" % entry, "w") as f:
        f.write(content)

    print('Rendered file saved in: %s.html' % entry)

    entrys.insert(0, {
        'id' : id_,
        'title' : title,
        'tags' : tags,
        'date' : date,
        'entry' : 'entrys/%s.html' % entry
    })
    db.set('entrys', entrys)
    db.set('count', id_)
    print('Entry inserted')

def mod_entry():
    id_ = int(input('id: '))
    entry = entrys[len(entrys) - id_]
    print('entry:', entry)


#   Menu
while True:
    #   Script
    count = db.get('count')
    entrys = db.get('entrys')

    print("count:", count)
    e = input("entrys:")
    if e:
        print(colorama.Fore.LIGHTCYAN_EX)
        for e in entrys:
            print(e)
    print(colorama.Fore.MAGENTA)
    print('\t(1) - Agregar entrada.')
    print('\t(2) - Modificar entrada.')
    print('\t(3) - Eliminar entrada.')
    opc = input('opcion: ')
    if opc == '1':
        new_entry()
    elif opc == '2':
        mod_entry()
    elif opc == '3':
        del_entry()
    else:
        break

# Luis Albizo 2018 - 09 - 18
