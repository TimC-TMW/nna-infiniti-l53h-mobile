def buildDisclaimer(disclaimer, disclaimer_key = nil)
  # Prepare a string for the disclaimers
  full_disclaimer = ""

  # Include disclaimers as paragraphs
  if disclaimer.body
    disclaimer.body.each_with_index do |paragraph, key|
      if disclaimer_key and key == 0
        full_disclaimer << %Q[<p>[#{(disclaimer_key + 1)}] ]
      else 
        full_disclaimer << %Q[<p>]
      end

      full_disclaimer << %Q[#{paragraph}</p>]
    end
  end

  # Get pack of disclaimers for disclaimer groups
  if disclaimer.group
    disclaimer.group.each_with_index do |disclaimer_id, key|
      # Get the current disclaimer using the current disclaimers id
      group_disclaimer = @cfg.disclaimers["#{disclaimer_id}"]

      if key == 0
        full_disclaimer << buildDisclaimer(group_disclaimer, disclaimer_key)
      else 
        full_disclaimer << buildDisclaimer(group_disclaimer)
      end
    end
  end

  return full_disclaimer
end