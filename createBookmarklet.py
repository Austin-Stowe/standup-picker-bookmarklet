import argparse
import urllib.parse
from colorama import Fore
from colorama import Style
from colorama import init
from termcolor import colored

init()

def urlencode(str):
    return urllib.parse.quote(str)

parser = argparse.ArgumentParser(description = 'Create Bookmarklet Code')
parser.add_argument('--file', metavar='F', help='path to JS file to convert to bookmarklet')
args = parser.parse_args()

startMessage = "Converting {} to JavaScript Bookmarklet..."
startMessage = str.format(startMessage, args.file)

print(colored(startMessage, 'green'))

with open(args.file, 'r') as file:
        data = file.read().replace('\n', '')

print(colored("Copy everything below the dashed line...", 'green'))
print(colored("""
    ================================================================================================================
    """, 'green'))

data = "(function(){" + data + "})();";
encodedData = urlencode(data)

print("javascript:" + encodedData)
