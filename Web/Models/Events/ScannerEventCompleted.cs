using MediatR;

namespace Web.Models.Events
{
    public class ScannerEventCompleted : INotification
    {
        public string ScannerResultString { get; set; }

        public ScannerEventCompleted(string scannerResults) 
            => ScannerResultString = scannerResults;
    }
}