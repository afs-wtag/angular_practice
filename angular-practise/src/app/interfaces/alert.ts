export class AlertOptions {
    title: string;
    subtitle: string;
    color: string;
    closable: boolean;
  }
  
  export const Alerts = [
    {
      title: "success alert",
      subtitle: "Indicates a successful or positive action",
      color: "alert alert-success",
      closable: true
    },
    {
      title: "warning alert",
      subtitle: "Indicates a warning or positive action",
      color: "alert alert-warning",
      closable: false
    },
    {
      title: "danger alert",
      subtitle: "Indicates a danger or positive action",
      color: "alert alert-danger",
      closable: true
    },
    {
      title: "default alert",
      subtitle: "Indicates a default or positive action",
      color: "alert alert-info",
      closable: false
    }
  ];
  