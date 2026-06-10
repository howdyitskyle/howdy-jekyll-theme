require "jekyll"
require "pathname"

module Howdy
  class Theme
    def self.root
      Pathname.new(File.expand_path("..", __dir__))
    end
  end
end

Jekyll::Hooks.register :site, :after_init do |site|
  # Add theme paths to Jekyll's lookup
  theme_root = Howdy::Theme.root

  site.layouts_path = theme_root.join("_layouts").to_s
  site.includes_load_paths << theme_root.join("_includes").to_s
  site.sass.paths << theme_root.join("_sass").to_s
end
