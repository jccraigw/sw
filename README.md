# Coding Challenge Notes
`Thought process and Issues`

`Backend`

1. Getting the backend setup was fairly straight forward -- ran "db:setup" and "db:seed" then "rails g scaffold_controller Todo" to generate restful routes
2. Added “resources :todos” to routes.rb to fix ActionController::RoutingError (No route matches [GET] "/"): error - this allowed my routes to link to controller 
3. Then tested routes in Postman to ensure backend server was up and running returning json
4. Installed the rack cors middleware gem “gem install rack-cors". Also updated Gemfile.
5. Added the following to the core.rb file to allow cross origin resource sharing:

```Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

`Fontend`

1. I was able fetch the data from the getTodos() function but had an issue rendering the stored list items from the props. I received a function error when attempting to map this.prop.todos.map and was unable to resolve. I was able to see the data pulled in the action response but my attempt to render did not work properly. Im new to react but confident if given an example of how this works based off your approach to api calls I could accomplish this going forward. I found some other approaches I could have used but wasnt sure if I was allowed to make big changes.
2. What I did instead was get the list working client side only and applied some styling. It functions as a todo list should but misses the data from the backend which can be fixed. 