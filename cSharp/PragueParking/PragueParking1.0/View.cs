using System;

namespace PragueParkingMalin
{
    class View
    {
        public static void MainMenu()
        {
            Console.WriteLine("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            Console.WriteLine("~~~~~~~ Welcome to Prague parking! ~~~~~~");
            Console.WriteLine("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            Console.WriteLine("Please choose an option below:");
            Console.WriteLine("1. Check in a vehicle."); 
            Console.WriteLine("2. Check out a vehicle.");
            Console.WriteLine("3. Move vehicle.");
            Console.WriteLine("4. Search for vehicle.");
            Console.WriteLine("5. Show garage map.");
            Console.WriteLine("6. Exit program.");
        }

        public static void CheckInVehicle()
        {
            Console.WriteLine("Checked in a vehicle."); 
        }
    }
}