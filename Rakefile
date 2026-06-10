require "html-proofer"
require "jekyll"

JEKYLL_DIR = File.expand_path(__dir__)
DEST_DIR   = File.join(JEKYLL_DIR, "_site")

task :default => :test

desc "Build the Jekyll site"
task :build do
  Jekyll::Site.new(Jekyll.configuration(
    "source"      => JEKYLL_DIR,
    "destination" => DEST_DIR,
    "config"      => File.join(JEKYLL_DIR, "_config.yml"),
  )).process
end

desc "Build site and run HTML validation tests"
task :test => :build do
  options = {
    # Skip external link checks (fonts, social placeholders, demo URLs)
    ignore_urls: [
      /fonts\.googleapis\.com/,
      /fonts\.gstatic\.com/,
      /twitter\.com\/intent/,
      /x\.com\/intent/,
      /linkedin\.com\/sharing/,
      /linkedin\.com\/in\/yourusername/,
      /giscus\.app/,
      /disqus\.com/,
      /utteranc\.es/,
      /plausible\.io/,
      /\.example\.com/,
      /dribbble\.com\/yourusername/,
      /github\.com\/.*howdy-jekyll-theme/,
      /calendly\.com\/yourusername/,
    ],
    # Disable HTTPS check — local builds use http://localhost
    enforce_https: false,
    check_external_hash: false,
    ignore_status_codes: [403, 429, 999],
  }

  begin
    HTMLProofer.check_directory(DEST_DIR, options).run
    puts "\n  All checks passed."
  rescue RuntimeError => e
    abort "\n  HTML checks failed: #{e.message}"
  end
end

desc "Run Lighthouse CI for performance and accessibility"
task :lighthouse => :build do
  puts "\n  Running Lighthouse CI on #{DEST_DIR}...\n"
  system("npx lhci autorun --config=./lighthouserc.json") || abort("\n  Lighthouse CI failed.")
end

desc "Run all tests: HTML validation + config + Lighthouse"
task :all => [:validate_config, :test, :lighthouse]

desc "Validate _config.yml for required fields and valid values"
task :validate_config do
  require "yaml"
  config_path = File.join(JEKYLL_DIR, "_config.yml")
  config = YAML.load_file(config_path)
  errors = []

  # Required fields
  %w[title description author email].each do |key|
    errors << "Missing required field: #{key}" unless config[key]
  end

  # Navigation must be an array with title/url
  if config["navigation"].is_a?(Array)
    config["navigation"].each_with_index do |item, i|
      errors << "navigation[#{i}]: missing 'title'" unless item["title"]
      errors << "navigation[#{i}]: missing 'url'" unless item["url"]
    end
  else
    errors << "navigation: must be an array"
  end

  # Font validation
  valid_fonts = %w[Inter DM+Sans Plus+Jakarta+Sans Instrument+Sans Space+Grotesk Work+Sans Outfit Manrope Sora]
  primary = config.dig("fonts", "primary")
  if primary && !valid_fonts.include?(primary.gsub(" ", "+"))
    errors << "fonts.primary: '#{primary}' is not a supported font. Choose from: #{valid_fonts.map { |f| f.gsub("+", " ") }.join(", ")}"
  end

  if errors.any?
    abort "\n  Config validation failed:\n  #{errors.join("\n  ")}"
  else
    puts "\n  Config validation passed."
  end
end
