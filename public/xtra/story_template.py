import json
import hashlib
import sys

story_dict = {}

print("Prompt: ")
prompt = sys.stdin.read()

print("Story: ")
story = sys.stdin.read()

prompt = prompt.replace("\u2019", "'")
story = story.replace("\u2019", "'")

story_dict.update({"prompt": prompt})
story_dict.update({"story": story})

filename = hashlib.md5(story.encode('UTF-8')).hexdigest()[:12] + ".json"
with open (filename, 'w') as fp:
  json.dump(story_dict, fp, indent=2)

print("Saved to file: " + filename)
