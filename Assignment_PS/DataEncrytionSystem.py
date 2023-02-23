
key = 11

def DataEncryptionSystem(messageStr): 

    res = ""
    for i in range(len(messageStr)):
        if ord(messageStr[i]) >= 32 and ord(messageStr[i]) <= 47:
            res += chr(32 + (32 - ord(messageStr[i]) + key)%16)
        elif ord(messageStr[i]) >= 48 and ord(messageStr[i]) <= 57:
            res += chr(48 + (48 - ord(messageStr[i]) + key)%10)
        elif ord(messageStr[i]) >= 58 and ord(messageStr[i]) <= 64:
            res += chr(58 + (58 - ord(messageStr[i]) + key)%7)
        elif ord(messageStr[i]) >= 65 and ord(messageStr[i]) <= 90:
            res += chr(65 + (65 - ord(messageStr[i]) + key)%26)
        elif ord(messageStr[i]) >= 91 and ord(messageStr[i]) <= 96:
            res += chr(91 + (91 - ord(messageStr[i]) + key)%6)
        elif ord(messageStr[i]) >= 97 and ord(messageStr[i]) <= 122:
            res += chr(97 + (97 - ord(messageStr[i]) + key)%26)
        elif ord(messageStr[i]) >= 123 and ord(messageStr[i]) <= 126:
            res += chr(123 + (123 - ord(messageStr[i]) + key)%4)

    return res



inputStr = input("Enter a message : ")
encodedMessage = DataEncryptionSystem(inputStr)
print("Encoded Message : " + encodedMessage)


