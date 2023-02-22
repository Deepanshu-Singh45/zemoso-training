
def DataEncryptionSystem(messageStr): 

    res = ""
    for i in range(len(messageStr)):
        res += chr((ord(messageStr[i]) + 10)%127)
    return res



inputStr = input("Enter a message : ")
encodedMessage = DataEncryptionSystem(inputStr)
print("Encoded Message : " + encodedMessage)


