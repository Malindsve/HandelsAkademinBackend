using System;
using System.Collections.Generic;

namespace PragueParkingMalin
{
    class ProgramStart
    {
        //-------------------- Array med 100 tomma strängar --------------------------------
        public static ParkingTemplate[] CarsInLot = new ParkingTemplate[100];
        public static int ParkingCounter = 0;
        private static bool _runProgram = true;
        private static bool _runOnce = true;
        private static readonly Controller Controller = new Controller();

        static void Main()
        {
            ProgramSetup();
            // DeveloperMode();
            while (_runProgram)
            {
                MenuLoop();
            }
        }

        private static void DeveloperMode()
        {
            CarsInLot[0] = new ParkingTemplate(Controller.CheckForFirstEmptyParkingSpace() + 1, "aaa", "efg456", true);
            CarsInLot[1] = new ParkingTemplate(Controller.CheckForFirstEmptyParkingSpace() + 1, "bbb", "ccc", false);
            CarsInLot[2] = new ParkingTemplate(Controller.CheckForFirstEmptyParkingSpace() + 1, "ddd", "-1", false);
        }

        private static void ProgramSetup()
        {
            if (_runOnce)
            {
                _runOnce = Controller.RunOnceAtStart();
            }
        }

        private static void MenuLoop()
        {
            View.MainMenu();
            int menuSelection;
            try
            {
                menuSelection = Convert.ToInt32(Console.ReadLine());
            }
            catch (Exception e)
            {
                // Console.WriteLine(e);
                return;
            }

            switch (menuSelection)
            {
                case 1:
                    Controller.CheckInAVehicle();
                    break;
                case 2:
                    Controller.CheckOutAVehicle();
                    break;
                case 3:
                    Controller.MoveAVehicle();
                    break;
                case 4:
                    Controller.SearchForAVehicle();
                    break;
                case 5:
                    Controller.GarageMap();
                    break;
                case 6:
                    //-------------------- Funktion för att avsluta program ----------------------------
                    Console.WriteLine("6. Exited program.");
                    //-------------------- Funktion för att rensa array när programmet stänger ---------
                    Controller.RunOnceAtStart();
                    Controller.GarageMap();
                    _runProgram = false;
                    break;
                default:
                    Console.WriteLine("Try again!");
                    break;
            }
        }
    }
}