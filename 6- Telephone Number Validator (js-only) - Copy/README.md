# Telephone Number Validator


The valid formats for US numbers:

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

The objective is to validate or reject the US phone number based on any combination of the formats provided above. 

The area code is required. If the country code is provided, we must confirm that the country code is 1. 

Return true if the string is a valid US phone number; otherwise return false.