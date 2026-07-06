Gem::Specification.new do |spec|
  spec.name          = "howdy-jekyll-theme"
  spec.version       = "1.0.8"
  spec.authors       = ["Kyle Greenan"]
  spec.email         = ["kyle@howdyitskyle.com"]

  spec.summary       = "A clean and modern Jekyll theme for personal websites and portfolios"
  spec.description   = "Howdy is a clean and modern Jekyll theme designed for personal websites and portfolios. Features both light and dark themes, responsive layout, elegant typography, and support for projects and blog."
  spec.homepage      = "https://howdyitskyle.github.io/howdy-jekyll-theme"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 3.0"

  spec.files         = Dir["_layouts/**/*", "_includes/**/*", "_sass/**/*", "_plugins/**/*", "assets/**/*", "_projects/**/*", "_posts/**/*", "lib/**/*", "*.md", "*.gemspec", "Gemfile", "LICENSE", "*.otf", "*.ico"]
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "jekyll", ">= 3.9"
  spec.add_runtime_dependency "jekyll-seo-tag", ">= 2.8", "< 2.10"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0"

  spec.add_development_dependency "bundler", ">= 2.4"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "html-proofer", "~> 5.0"
  spec.add_development_dependency "webrick", "~> 1.8"
end
