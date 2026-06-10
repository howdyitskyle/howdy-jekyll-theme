# Generates _sass/_user-colors.scss from site.colors config
# This allows users to override theme colors via _config.yml

Jekyll::Hooks.register :site, :after_init do |site|
  colors = site.config["colors"] || {}
  colors = {} unless colors.is_a?(Hash)
  dark = colors["dark"] || {}
  dark = {} unless dark.is_a?(Hash)

  # Map config keys to CSS variable names
  var_map = {
    "text_primary" => "--howdy-text-primary",
    "text_secondary" => "--howdy-text-secondary",
    "text_muted" => "--howdy-text-muted",
    "text_red" => "--howdy-text-red",
    "bg_light_gray" => "--howdy-bg-light-gray",
    "bg_white" => "--howdy-bg-white",
    "bg_dark_gray" => "--howdy-bg-dark-gray",
    "bg_cream" => "--howdy-bg-cream",
    "bg_semi_white" => "--howdy-bg-semi-white",
    "bg_green_tint" => "--howdy-bg-green-tint",
    "bg_red_tint" => "--howdy-bg-red-tint",
    "bg_orange_tint" => "--howdy-bg-orange-tint",
    "bg_blue_tint" => "--howdy-bg-blue-tint",
    "bg_purple_tint" => "--howdy-bg-purple-tint",
    "accent_green" => "--howdy-accent-green",
    "accent_orange" => "--howdy-accent-orange",
    "accent_blue" => "--howdy-accent-blue",
    "accent_purple" => "--howdy-accent-purple",
    "border" => "--howdy-border",
  }

  sass_dir = File.join(site.source, "_sass")
  output_path = File.join(sass_dir, "_user-colors.scss")

  lines = ["// Auto-generated from site.colors in _config.yml — do not edit"]

  # Light mode overrides (grouped into single :root block)
  light_props = []
  var_map.each do |key, var|
    val = colors[key]
    light_props << "  #{var}: #{val};" if val
  end

  if light_props.any?
    lines << ""
    lines << ":root {"
    lines.concat(light_props)
    lines << "}"
  end

  # Dark mode overrides (grouped into single html.dark-mode block)
  dark_props = []
  var_map.each do |key, var|
    val = dark[key]
    dark_props << "  #{var}: #{val};" if val
  end

  if dark_props.any?
    lines << ""
    lines << "html.dark-mode, html.dark-mode body, html.dark-mode .main-container {"
    lines.concat(dark_props)
    lines << "}"
  end

  lines << ""
  File.write(output_path, lines.join("\n"))
end
