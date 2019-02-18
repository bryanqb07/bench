# @benches.each do |bench|
#   json.partial! "api/benches/bench.json.jbuilder", bench: bench
# end


json.partial! partial: 'api/benches/bench', collection: @benches, as: :bench
