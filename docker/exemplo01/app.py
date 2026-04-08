import colorama
from colorama import Fore, Style, just_fix_windows_console 
import random

just_fix_windows_console()

print (Fore.RED + "Gerador de números aleatórios" + Style.RESET_ALL)

numero = random.randint(1, 100)

print (Fore.GREEN + f"O número gerado é: {numero}" + Style.RESET_ALL)