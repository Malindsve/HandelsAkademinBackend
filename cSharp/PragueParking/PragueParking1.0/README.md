# Final Project C#

## Assignment and requirements
####Background
The client wants a parkingsystem for a parkinglot at the castle in Prague.
The parkinglot is a valet parking.
The customer leaves their vehicle and can claim their vehicle by listing their registration number.  
The parkinglot is ran by young students and pensioners so it must be a very simple system.
The parkinglot accepts both cars and motorcycles.
All vehicles must be claimed before 12pm, when the parkinglot closes.
Unclaimed vehicles will be driven to a parkinglot outside of the city and the customers have to pay a fine to claim their vehicle (This is not handled by the system).

#### The clients requirements om the system:
- The system should be able to recieve a vehicle and say where it's parked.
- Manually move a vehicle from one place to another.
- Remove vehicle once claimed by owner.
- Search for a vehicle.
- The customer wants a textbased menu.

The data does not need to be saved at the moment. 
The computer turns on when the parking opens and turns off when you go home.


#### Tecnical demands
- All identification of vehicles is trough registration numbers.
- Registration numbers is always strings and should be max 10 letters long.
- There is 100 parkingspaces in the parkinglot.
- One space can be:
    - empty
    - hold 1 car
    - hold up to 2 motorcycles
- The parkingspaces should be handled with one-dimensional string arrays.
- The Array should handle 100 elements.
- The clients employees wants the spaces to be numbered 1-100 in the system.


## Grade G
- All criterias listed above should be fulfilled.
- Project should be submitted trough GitHub.
- The program should be able ro run on all computers.
- If any special commands (accept from F5 or ctrl+F5 in Visual Studio) are required, these should be documented in README.md in GitHub for this.


### Plan
- Menu with switch-statements
    - Make sure it handles other not listed numbers, NaN - "enter"
- Array with 100 empty elements
- Function to add vehicle with registration number (max 10char)
    - change to .lower
- Function to add 1 car or 2 mc (in one place)
- Function to remove vehicle with registration number
- Function to move vehicle with registration number
- Search for vehicle with index (add one to make sure parkingspots are numbered 1-100)
- Map of garage to show where vehicles are parked (10x10 grid)
- Exit program and clear array for next use










