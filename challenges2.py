// circle back, incomplete //

# Part 1: Remove First and Last Characters
# Your goal is to create a function that removes the first and last character of a string. You're given one parameter, the original string. All input strings will be two characters or longer.

def remove_char(s):
  
  return s[1: -1]
    

print(remove_char('eloquent')) # -> 'loquen'
print(remove_char('country'))  # -> 'ountr'
print(remove_char('person')) # -> 'erso'
print(remove_char('place')) # -> 'lac'
print(remove_char('ok')) # -> ''
print(remove_char('ooopsss')) # -> 'oopss'


# Part 2: Find the Greatest Common Divisor (GCD)
# Find the greatest common divisor of two positive integers without using a Python library. The integers may be large, so after you write a brute force solution, try to find a more efficient solution.

# The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is greater than or equal to 1.
