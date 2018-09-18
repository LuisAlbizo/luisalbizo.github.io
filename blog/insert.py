import forgive # JSON Database system
import markdown, pygments, micawber # Rendering html
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
import os, colorama, time, itertools
colorama.init()
print(colorama.Fore.BLACK, colorama.Back.WHITE)

providers = micawber.bootstrap_basic()
formatter = HtmlFormatter()
db = forgive.ForgiveDB('list.json')

# Util Functions

def lexify(lang, code):
    lex = get_lexer_by_name(lang)
    return highlight(code, lex, formatter)

count = db.get('count')
entrys = db.get('entrys')

print("count:", count)
print("entrys:")
print(colorama.Back.BLACK, colorama.Fore.LIGHTCYAN_EX)
for e in entrys:
    print(e)
print(colorama.Fore.BLACK, colorama.Back.WHITE)

# Time
t = int(time.time())
lt = time.localtime()
date = [lt.tm_year, lt.tm_mon, lt.tm_mday, lt.tm_hour, lt.tm_min, lt.tm_sec]
print("Registered time:", date)

# Info
id_ = count + 1
print("ID:", id_)
title = input("Title: ")
tags = input("Tags: ").split(",")
print("Listed tags:",tags)
entry = input("Entry file: ")
input("Opening file entrys/%s.md to edit. (Press enter)" % entry)
print(colorama.Style.RESET_ALL)
os.system("vim entrys\\%s.md" % entry)
print(colorama.Fore.BLACK, colorama.Back.WHITE)

# Rendering the entry
with open("entrys/%s.md" % entry, "r") as f:
    content = markdown.markdown(f.read())
    content = micawber.parse_html(content, providers)

print(content)


# Luis Albizo 2018 - 09 - 18
