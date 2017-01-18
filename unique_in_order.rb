require 'pry'

def unique_in_order(iterable)
  ia = iterable.split('')
  slices = ia.slice_when { |el, nex| el != nex  }.to_a
  slices.map { |slice| slice.uniq }.flatten
end

unique_in_order("AAAABBBCCDAABBB")

binding.pry
p "pry bug"
