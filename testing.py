def conversion(N, m, c):
    X = bin(N)
    a = "0000000000000000"
    Y = X[2:]

    if len(Y) != 16:
        miss = 16 - len(Y)
        No = a[:miss] + Y

    if c == "L":
        New = No[m:] + No[:m]
        final = int(New, 2)

    if c == "R":
        b = 16 - m
        New = No[b:] + No[:b]
        final = int(New, 2)

    return final


if __name__ == "__main__":
    T = int(input())
    li = list()
    for i in range(T):
        x = input()

        li.append(x)

    for j in li:
        y = j.split(" ")

        result = conversion(int(y[0]), int(y[1]), y[2])
        print(result)

