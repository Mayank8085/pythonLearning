import urllib.request, urllib.parse, urllib.error
import json
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input("Enter-")
print("Retrieving", url)
uh = urllib.request.urlopen(url, context=ctx)

data = uh.read()
info = json.loads(data)
# print("User count:", len(info))
sm = 0

for item in info["comments"]:

    sm += int(item["count"])


print(sm)
