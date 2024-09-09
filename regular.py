import re

x = open("pyt.txt")
word = x.read()
y = re.findall("[0-9]+", word)

sum = 0

for i in y:
    sum = sum + int(i)

print(sum)
