Jekyll::Hooks.register :site, :post_read do |site|
  projects = site.collections['projects']
  if projects.metadata['sort_reverse']
    projects.docs.reverse!
  end
end
