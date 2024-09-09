from PIL import Image


x = Image.open("dog.jpg")
y = Image.open("cop11.jpg", "w")

for i in x:
    y.write(i)

y.close()
