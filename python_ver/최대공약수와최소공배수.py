def gcd(a, b):
    if b > a:
        a, b = b, a
    if b == 0:
        return a
    else:
        return gcd(b, a%b)

a = gcd(138, 20)

def lcd(a, b):
    return a*b // gcd(a,b)

b = lcd(138, 20)

print(a, b)