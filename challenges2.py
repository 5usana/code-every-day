# Your goal is to create a function that removes the first and last character of a string. You're given one parameter, the original string. All input strings will be two characters or longer.

def remove_char(s):
  
  return s[1: -1]
    

print(remove_char('eloquent')) # -> 'loquen'
print(remove_char('country'))  # -> 'ountr'
print(remove_char('person')) # -> 'erso'
print(remove_char('place')) # -> 'lac'
print(remove_char('ok')) # -> ''
print(remove_char('ooopsss')) # -> 'oopss'