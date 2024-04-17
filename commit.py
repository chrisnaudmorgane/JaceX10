import os

message_commit = input()
os.system(f"git add .; git commit -m \"{message_commit}\"; git push")