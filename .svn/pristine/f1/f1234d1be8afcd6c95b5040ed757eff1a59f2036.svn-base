# For compressing inline javascript strings
def minify_inline_js(js_string)
  # require 'uglifier'
  # Uglifier.new.compile(js_string)
  js_string.gsub(/[\n\t]/, "") # remove all whitespace 
end

# Money Format
def moneyFormat(price, currency)
  return Money.new_with_dollars(price, currency).format(:no_cents => true)
end
def moneyFormatPlain(price, currency)
  return Money.new_with_dollars(price, currency).format(:no_cents => true, :symbol => false)
end

# Query-stringify
def queryStringify(url, params)
  queryString = "?"
  
  params.each_pair do |key,value|
    queryString += "#{key}=#{value}"
  end

  return url + queryString
end