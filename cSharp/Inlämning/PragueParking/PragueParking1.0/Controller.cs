using System;

namespace PragueParkingMalin
{
    class Controller
    {
        public bool RunOnceAtStart()
        {
            for (int i = 0; i < ProgramStart.CarsInLot.Length; i++)
            {
                ClearOutAPlaceID(i);
            }
            return false;
        }
        private void ClearOutAPlaceID(int index)
        {
            ProgramStart.CarsInLot[index] = new ParkingTemplate(-1, "-1", "-1", true);
        }

        public int CheckForFirstEmptyParkingSpace()
        {
            for (int index = 0; index < ProgramStart.CarsInLot.Length; index++)
            {
                int placeId = ProgramStart.CarsInLot[index].PlaceId;
                String regNumber1 = ProgramStart.CarsInLot[index].RegNumber1;
                String regNumber2 = ProgramStart.CarsInLot[index].RegNumber2;
                bool isCar = ProgramStart.CarsInLot[index].IsCar;
                if ((placeId == -1) && (regNumber1 == "-1") && (regNumber2 == "-1") && (isCar == true))
                {
                    return index;
                }
            }
            return -1;    // Returneras bara om parkeringen är full
        }

        //-------------------- Funktion för att checka in fordon ---------------------------
        //-------------------- Funktion för att sätta in 1 bil eller 2 MC ------------------
        public void CheckInAVehicle()
        {
            View.CheckInVehicle();
            int firstEmptyIndex  = CheckForFirstEmptyParkingSpace();
            int placeId = firstEmptyIndex + 1;
            
            Console.WriteLine("Car (1) or MC (0)");
            int isCarInput;
            try
            {
                isCarInput = Convert.ToInt32(Console.ReadLine());
            }
            catch (Exception e)
            {
                // Console.WriteLine(e);
                return;
            }
            
            bool isCar = isCarInput == 1;

            String regNumber1;
            String regNumber2;

            if (isCar)
            {
                Console.WriteLine("Regnr 1 (Max 10 characters):");
                regNumber1 = Console.ReadLine();
                regNumber2 = "-1";
                if (IsRegNrToLong(regNumber1))
                {
                    return;
                }
            }
            else
            {
                Console.WriteLine("Regnr 1 (Max 10 characters):");
                regNumber1 = Console.ReadLine();
                if (regNumber1.Equals(""))
                {
                    regNumber1 = "-1";
                }
                if (IsRegNrToLong(regNumber1))
                {
                    return;
                }

                Console.WriteLine("Regnr 2 (Max 10 characters):");
                regNumber2 = Console.ReadLine();
                if (regNumber2.Equals(""))
                {
                    regNumber2 = "-1";
                }
                if (IsRegNrToLong(regNumber2))
                {
                    return;
                }
            }

            if (regNumber1 == "-1" && regNumber2 == "-1")
            {
                Console.WriteLine("No vehicle entered");
                return;
            }
            AddAVehicle(firstEmptyIndex, placeId, regNumber1, regNumber2, isCar);
        }

        private bool IsRegNrToLong(String input)
        {
            if (input.Length > 10)
            {
                Console.WriteLine("Too long string");
                return true;
            }

            return false;
        }

        private void AddAVehicle(int firstEmptyIndex, int placeId, String regNumber1, String regNumber2, bool isCar)
        {
            ProgramStart.CarsInLot[firstEmptyIndex] = new ParkingTemplate(placeId, regNumber1, regNumber2, isCar);
        }
        
        //-------------------- Funktion för att checka ut fordon ---------------------------
        public void CheckOutAVehicle()
        {
            Console.WriteLine("Enter reg nr: ");
            String regNumber = Console.ReadLine();

            for (int i = 0; i < ProgramStart.CarsInLot.Length; i++)
            {
                if (regNumber == ProgramStart.CarsInLot[i].RegNumber1 || regNumber == ProgramStart.CarsInLot[i].RegNumber2)
                {
                    if (ProgramStart.CarsInLot[i].IsCar)
                    {
                        ProgramStart.CarsInLot[i] = new ParkingTemplate(-1, "-1", "-1", true);
                    }
                    else
                    {
                        if (ProgramStart.CarsInLot[i].RegNumber1 == "-1" || ProgramStart.CarsInLot[i].RegNumber2 == "-1")
                        {
                            ProgramStart.CarsInLot[i] = new ParkingTemplate(-1, "-1", "-1", true);
                        }
                        else
                        {
                            if (ProgramStart.CarsInLot[i].RegNumber1 == regNumber)
                            {
                                String keepRegNr = ProgramStart.CarsInLot[i].RegNumber2;
                                ProgramStart.CarsInLot[i] = new ParkingTemplate(-1, "-1", keepRegNr, false);
                            } 
                            else
                            {
                                String keepRegNr = ProgramStart.CarsInLot[i].RegNumber1;
                                ProgramStart.CarsInLot[i] = new ParkingTemplate(-1, keepRegNr, "-1", false);
                            }
                        }
                    }
                }
            }
            
            Console.WriteLine("Checked out vehicle with reg.nr. " + regNumber); 
        }
        
        //-------------------- Funktion för att söka efter fordon --------------------------
        public void SearchForAVehicle()
        {
            Console.WriteLine("Search for reg nr: ");
            String regNumber = Console.ReadLine();
            if (regNumber.Equals(""))
            {
                return;
            }

            for (int i = 0; i < ProgramStart.CarsInLot.Length; i++)
            {
                if (regNumber.ToLower().Equals(ProgramStart.CarsInLot[i].RegNumber1.ToLower()) || 
                    regNumber.ToLower().Equals(ProgramStart.CarsInLot[i].RegNumber2.ToLower()))
                {
                    Console.WriteLine("Found vehicle with reg.nr. " + regNumber + 
                                      " on place id = " + ProgramStart.CarsInLot[i].PlaceId);
                    return;
                }
            }
            
            Console.WriteLine("Didn't found reg.nr. " + regNumber); 
        }
        
        //-------------------- Funktion för att flytta fordon ------------------------------
        public void MoveAVehicle()
        {
            Console.WriteLine("Search for reg nr: ");
            String regNumber = Console.ReadLine();
            int oldPlaceIndex = GetPlaceIndex(regNumber);
            if (oldPlaceIndex == -1) // om regnummret inte finns
            {
                Console.WriteLine("No Match, returning to menu");
                return;
            }
            
            // All gammal data
            String oldRegNumber1 = ProgramStart.CarsInLot[oldPlaceIndex].RegNumber1;
            String oldRegNumber2 = ProgramStart.CarsInLot[oldPlaceIndex].RegNumber2;
            bool oldIsCar = ProgramStart.CarsInLot[oldPlaceIndex].IsCar;
            
            int firstEmptyIndex = CheckForFirstEmptyParkingSpace();
            int placeId = firstEmptyIndex + 1;
            
            // om 1 fordon
            if (oldRegNumber1 == "-1")
            {
                AddAVehicle(firstEmptyIndex, placeId, oldRegNumber2, "-1", oldIsCar);
                ClearOutAPlaceID(oldPlaceIndex);
            } else if (oldRegNumber2 == "-1")
            {
                AddAVehicle(firstEmptyIndex, placeId, oldRegNumber1, "-1", oldIsCar);
                ClearOutAPlaceID(oldPlaceIndex);
            }
            else         // om 2 fordon
            {
                if (regNumber == oldRegNumber1)
                {
                    AddAVehicle(firstEmptyIndex, placeId, oldRegNumber1, "-1", oldIsCar);
                    ProgramStart.CarsInLot[oldPlaceIndex].RegNumber1 = "-1";
                }
                else
                {
                    AddAVehicle(firstEmptyIndex, placeId, oldRegNumber2, "-1", oldIsCar);
                    ProgramStart.CarsInLot[oldPlaceIndex].RegNumber2 = "-1";
                }
            }
        }

        private static int GetPlaceIndex(string regNumber)
        {
            for (int i = 0; i < ProgramStart.CarsInLot.Length; i++)
            {
                if (regNumber.ToLower().Equals(ProgramStart.CarsInLot[i].RegNumber1.ToLower()) ||
                    regNumber.ToLower().Equals(ProgramStart.CarsInLot[i].RegNumber2.ToLower()))
                {
                    return i;
                }
            }
            return -1;
        }

        //-------------------- Funktion för att visa garagekarta ---------------------------
        public void GarageMap()
        {
            Console.WriteLine("+---+---+---+---+---+---+---+---+---+---+");
            for (int i = 0; i < ProgramStart.CarsInLot.Length; i++)
            {
                String output;
                String regNr1 = ProgramStart.CarsInLot[i].RegNumber1;
                String regNr2 = ProgramStart.CarsInLot[i].RegNumber2;

                if (regNr1.Equals("-1") && regNr2.Equals("-1"))
                {
                    output = " ";
                }
                else if (regNr1.Equals("-1") || regNr2.Equals("-1"))
                {
                    output = "1";
                }
                else
                {
                    output = "2";
                }

                Console.Write("| " + output);
                if ((i + 1) % 10 == 0)
                {
                    Console.Write(" |\n");
                    Console.WriteLine("+---+---+---+---+---+---+---+---+---+---+");
                }
                else
                {
                    Console.Write(" ");
                }
            }
        }
    }
}