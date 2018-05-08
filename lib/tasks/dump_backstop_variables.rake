desc 'Dump a JSON file for the backstop variable interpolation'
task dump_backstop_variables: :environment do
  post = Post.first!

  json = JSON.pretty_generate({
    post_id: post.id.to_s
  })

  File.open('backstop_data/variables.json', 'w') { |f| f.write(json) }
end
