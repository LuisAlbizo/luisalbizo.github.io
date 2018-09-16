import http.server
import os
import socketserver

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("127.0.0.1", 8080), Handler)

print("server:\thttp://127.0.0.1:8080\n\nlog:")

httpd.serve_forever()
