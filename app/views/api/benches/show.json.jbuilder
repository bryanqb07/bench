json.bench do
  json.partial! "api/benches/bench.json.jbuilder", bench: @bench
  json.reviewIds @bench.reviews.pluck(:id)
end

@bench.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! "api/reviews/review.json.jbuilder", review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :username
    end
  end

end
