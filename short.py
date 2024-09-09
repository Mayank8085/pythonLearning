name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)
counts = dict()
for line in handle:
    line.rstrip()
    if line.startswith("From "):
        words = line.split()
        time = words[5]
        pieces = time.split(":")
        counts[pieces[0]] = counts.get(pieces[0], 0) + 1


for k, v in sorted(counts.items()):
    print(k, v)
