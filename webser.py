import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET
import ssl


# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input("Enter-")
print("Retrieving", url)
uh = urllib.request.urlopen(url, context=ctx)

data = uh.read()
tree = ET.fromstring(data)
results = tree.findall(".//count")
sm = 0
total_number = 0
for i in results:

    sm += int(i.text)
    total_number += 1


print(sm)
print(total_number)
