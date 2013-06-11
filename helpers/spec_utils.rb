def getPackagesByTrim(groups) 
  # Create a hash to return the packages
  packages = Hash.new() 

  groups.each do |group_id|
    # Get the specified package group
    package_group = @cfg.model.package_groups["#{group_id}"]

    # Gather the appropriate packages into the package hash
    package_group.included_packages.each do |package_id|
      package = @cfg.model.packages["#{package_id}"]
      packages["#{package_id}"] = package
    end
  end

  return packages
end

def getSpecTrim(model)
  index = @cfg.trimindex.index(model)
  trim = @cfg.model.trims[index]

  return trim
end

def specItem(item)
  # Strip tooltip brackets from item
  spec_item = item.spec.gsub('[[', '').gsub(']]', '')

  if item.disclaimer and item.disclaimer != nil
    # Get the current disclaimer 
    curr_disclaimer = @cfg.disclaimers["#{item.disclaimer}"]
    
    # if @disclaimers.include?(curr_disclaimer)
    #   puts "true | #{curr_disclaimer.title}"
    # end

    # Append disclaimer index to appropriate specs
    spec_item << " [#{@disclaimer_index}]"
    
    # Append the current disclaimer to the disclaimer array to be displayed at the bottom of the page
    @disclaimers.push(curr_disclaimer)

    # Increment disclaimer count
    @disclaimer_index += 1
  end

  return spec_item
end

def specExists(item, trim_code)
  item.items.each do |sub_item|
    if sub_item.spec and sub_item.vals[trim_code] != -1
      return true
    elsif sub_item.items and sub_item.items != nil
      sub_item.items.each do |sub_sub_item|
        if sub_sub_item.spec and sub_sub_item.vals[trim_code] != -1
          return true
        end
      end
    end
  end

  return false
end