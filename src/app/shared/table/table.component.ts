import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  callData = [
      {
        logo: 'data:image/png;base64,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',
        name: 'Ritik Beniwal',
        id: 'DMI029384',
        info: 'Lead',
        infoId: '03AAAKXDJ9283KNS4ND',
        issueCategory: 'KYC',
        issueStatus: 'Unresolved',
        comments: 'Lorem Ipsum',
        callStatus: 'Rescheduled',
        callDate: '20 Apr 2025',
        callTime: '01:12 PM',
        callDuration: '04:12 min'
      },
      {
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAUVBMVEX///8AAAAfHx8LCwu0tLQyMjJcXFw2NjZYWFjR0dGDg4O7u7vU1NS2trYEBAQiIiJOTk74+Pifn5/k5ORhYWHc3NxkZGRRUVGIiIg7OzsPDw/CAZPNAAABKklEQVR4nO3X3XLBQACGYSskBPHfivu/0PYAZc2Gtma2kz7P8Tfv+o0YDAAAAAAAAAAAAAAAAAAAAAAA4B8aTYZNM5yMHg63dVWEoqq3fzI5HYeTat5ZWtfNaVjU3WdmSc6KcFHMug5dfQ3Dat2xzJKcXi0+Nx0vYHk9DLv0ME9yfNMKVbI1uh2GRXKZJRm30rGolX58eZKTeFImWvt4GPaJZZ7kMJ4sE63N3ambxDJPsoknTaJV352aul7mSfbmifTmo9WbL/vz18oqGr7g8vvSZBRrU61v/HrlSc6fvp/Y3bTe0sNMyZ/d4b2//qbx18n55X1ru++5B/W5Vhy6h7mSi3LZNMsy/RE929btMRzbw+N/QTmTAAAAAAAAAAAAAAAAAAAAAADQQx+ijhERXlO2NwAAAABJRU5ErkJggg==',
        name: 'Manpreet Singh',
        id: 'DMI029384',
        info: 'Opportunity',
        infoId: '03AAAKXDJ9283KNS4ND',
        issueCategory: 'e-Mandate',
        issueStatus: 'Resolved',
        comments: 'Lorem Ipsum',
        callStatus: 'Scheduled',
        callDate: '20 Apr 2025',
        callTime: '01:12 PM',
        callDuration: '04:12 min'
      },
      {
        logo: 'data:image/png;base64,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',
        name: 'Avika Sharma',
        id: 'DMI029384',
        info: 'NACH',
        infoId: '03AAAKXDJ9283KNS4ND',
        issueCategory: 'e-Mandate',
        issueStatus: 'Pending',
        comments: 'Lorem Ipsum',
        callStatus: 'Ended',
        callDate: '20 Apr 2025',
        callTime: '01:12 PM',
        callDuration: '04:12 min'
      },
      {
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAUVBMVEX///8AAAAfHx8LCwu0tLQyMjJcXFw2NjZYWFjR0dGDg4O7u7vU1NS2trYEBAQiIiJOTk74+Pifn5/k5ORhYWHc3NxkZGRRUVGIiIg7OzsPDw/CAZPNAAABKklEQVR4nO3X3XLBQACGYSskBPHfivu/0PYAZc2Gtma2kz7P8Tfv+o0YDAAAAAAAAAAAAAAAAAAAAAAA4B8aTYZNM5yMHg63dVWEoqq3fzI5HYeTat5ZWtfNaVjU3WdmSc6KcFHMug5dfQ3Dat2xzJKcXi0+Nx0vYHk9DLv0ME9yfNMKVbI1uh2GRXKZJRm30rGolX58eZKTeFImWvt4GPaJZZ7kMJ4sE63N3ambxDJPsoknTaJV352aul7mSfbmifTmo9WbL/vz18oqGr7g8vvSZBRrU61v/HrlSc6fvp/Y3bTe0sNMyZ/d4b2//qbx18n55X1ru++5B/W5Vhy6h7mSi3LZNMsy/RE929btMRzbw+N/QTmTAAAAAAAAAAAAAAAAAAAAAADQQx+ijhERXlO2NwAAAABJRU5ErkJggg==',
        name: 'Saurabh Kumar',
        id: 'DMI029384',
        info: 'Contact ID',
        infoId: '03AAAKXDJ9283KNS4ND',
        issueCategory: 'e-Mandate',
        issueStatus: 'Resolved',
        comments: 'Lorem Ipsum',
        callStatus: 'Ended',
        callDate: '20 Apr 2025',
        callTime: '01:12 PM',
        callDuration: '04:12 min'
      },
      {
        logo: 'data:image/png;base64,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',
        name: 'Hrithik Runak',
        id: 'DMI029384',
        info: 'Payment ID',
        infoId: '03AAAKXDJ9283KNS4ND',
        issueCategory: 'KYC',
        issueStatus: 'Pending',
        comments: 'Lorem Ipsum',
        callStatus: 'Ended',
        callDate: '20 Apr 2025',
        callTime: '01:12 PM',
        callDuration: '04:12 min'
      },
      {
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAUVBMVEX///8AAAAfHx8LCwu0tLQyMjJcXFw2NjZYWFjR0dGDg4O7u7vU1NS2trYEBAQiIiJOTk74+Pifn5/k5ORhYWHc3NxkZGRRUVGIiIg7OzsPDw/CAZPNAAABKklEQVR4nO3X3XLBQACGYSskBPHfivu/0PYAZc2Gtma2kz7P8Tfv+o0YDAAAAAAAAAAAAAAAAAAAAAAA4B8aTYZNM5yMHg63dVWEoqq3fzI5HYeTat5ZWtfNaVjU3WdmSc6KcFHMug5dfQ3Dat2xzJKcXi0+Nx0vYHk9DLv0ME9yfNMKVbI1uh2GRXKZJRm30rGolX58eZKTeFImWvt4GPaJZZ7kMJ4sE63N3ambxDJPsoknTaJV352aul7mSfbmifTmo9WbL/vz18oqGr7g8vvSZBRrU61v/HrlSc6fvp/Y3bTe0sNMyZ/d4b2//qbx18n55X1ru++5B/W5Vhy6h7mSi3LZNMsy/RE929btMRzbw+N/QTmTAAAAAAAAAAAAAAAAAAAAAADQQx+ijhERXlO2NwAAAABJRU5ErkJggg==',
        name: 'Naman Jain',
        id: 'DMI029384',
        info: 'Lead',
        infoId: '03AAAKXDJ9283KNS4ND',
        issueCategory: 'e-Mandate',
        issueStatus: 'UnResolved',
        comments: 'Lorem Ipsum',
        callStatus: 'Cancelled',
        callDate: '20 Apr 2025',
        callTime: '01:12 PM',
        callDuration: '04:12 min'
      },
  ];

}
