using System;

namespace PragueParkingMalin
{
    public class ParkingTemplate
    {
        private int placeId;
        private String regNumber1;
        private String regNumber2;
        private bool isCar;

        public ParkingTemplate(int placeId, string regNumber1, string regNumber2, bool isCar)
        {
            if (isCar)
            {
                this.placeId = placeId;
                this.regNumber1 = regNumber1;
                this.regNumber2 = "-1";
                this.isCar = isCar;
            }
            else
            {
                this.placeId = placeId;
                this.regNumber1 = regNumber1;
                this.regNumber2 = regNumber2;
                this.isCar = isCar;
            }
        }

        public int PlaceId
        {
            get => placeId;
            set => placeId = value;
        }

        public string RegNumber1
        {
            get => regNumber1;
            set => regNumber1 = value;
        }

        public string RegNumber2
        {
            get => regNumber2;
            set => regNumber2 = value;
        }

        public bool IsCar
        {
            get => isCar;
            set => isCar = value;
        }
    }
}